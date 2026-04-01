"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useStore } from "@/context/store-context";
import { products } from "@/lib/products";
import { CATEGORY_LABELS } from "@/lib/categories";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");

  function onSearchOpenChange(open: boolean) {
    setSearchOpen(open);
    if (!open) setQ("");
  }

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(t) ||
          p.shortDescription.toLowerCase().includes(t) ||
          CATEGORY_LABELS[p.category].toLowerCase().includes(t),
      )
      .slice(0, 8);
  }, [q]);

  return (
    <Dialog.Root open={searchOpen} onOpenChange={onSearchOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-[12vh] z-[81] w-[min(100%-2rem,36rem)] -translate-x-1/2 rounded-3xl border border-[var(--border-soft)] bg-surface p-0 shadow-[var(--shadow-lift)] outline-none">
          <Dialog.Title className="sr-only">Search products</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-[var(--border-soft)] px-5 py-4">
            <Search className="h-5 w-5 shrink-0 text-ink-muted" strokeWidth={1.5} />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search lamps, vases, decor…"
              className="min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-muted/70 outline-none"
            />
            <Dialog.Close
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-ink/5"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <div className="max-h-[min(60vh,420px)] overflow-y-auto p-2">
            {q.trim().length < 2 && (
              <p className="px-4 py-8 text-center text-sm text-ink-muted">
                Type at least 2 characters for suggestions.
              </p>
            )}
            {q.trim().length >= 2 && results.length === 0 && (
              <p className="px-4 py-8 text-center text-sm text-ink-muted">
                No matches. Try another keyword.
              </p>
            )}
            <ul className="space-y-1">
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/product/${p.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className={cn(
                      "flex gap-3 rounded-2xl p-3 transition-colors hover:bg-cream-dark",
                    )}
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-cream-dark">
                      <Image
                        src={p.images[0]}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-ink">{p.name}</p>
                      <p className="text-xs text-ink-muted">
                        {CATEGORY_LABELS[p.category]}, {formatPrice(p.price)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
