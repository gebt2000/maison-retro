#!/usr/bin/env python3
"""Remove solid/near-black background from logo via edge flood-fill (RGBA)."""
from __future__ import annotations

import sys
from collections import deque

from PIL import Image


def main() -> None:
    path = sys.argv[1] if len(sys.argv) > 1 else "public/brand/maison-retro-logo.png"
    out = sys.argv[2] if len(sys.argv) > 2 else path
    # Pixels this dark are treated as "background" for connectivity from edges
    thresh = int(sys.argv[3]) if len(sys.argv) > 3 else 38

    img = Image.open(path).convert("RGBA")
    w, h = img.size
    px = img.load()

    def is_bg(x: int, y: int) -> bool:
        r, g, b, _ = px[x, y]
        return max(r, g, b) <= thresh

    seen = [[False] * h for _ in range(w)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            if is_bg(x, y) and not seen[x][y]:
                seen[x][y] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if is_bg(x, y) and not seen[x][y]:
                seen[x][y] = True
                q.append((x, y))

    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and not seen[nx][ny] and is_bg(nx, ny):
                seen[nx][ny] = True
                q.append((nx, ny))

    # Second pass: soften fringe (anti-alias) on boundary of removed region
    for x in range(w):
        for y in range(h):
            if seen[x][y]:
                r, g, b, a = px[x, y]
                px[x, y] = (r, g, b, 0)
            else:
                r, g, b, a = px[x, y]
                # Dim near-black halos adjacent to transparent (common JPEG/PNG edge)
                if max(r, g, b) <= 55 and a > 0:
                    # Check if neighbor was background-filled
                    touch = False
                    for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                        if 0 <= nx < w and 0 <= ny < h and seen[nx][ny]:
                            touch = True
                            break
                    if touch:
                        px[x, y] = (r, g, b, min(a, 120))

    img.save(out, "PNG", optimize=True)
    print(f"Wrote {out} (edge flood-fill, thresh={thresh})")


if __name__ == "__main__":
    main()
