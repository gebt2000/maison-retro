import Link from "next/link";
import { CATEGORY_LABELS, CATEGORY_SLUGS } from "@/lib/categories";
import { BrandLogoLink } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border-soft)] bg-cream-dark/60">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogoLink variant="footer" className="rounded-lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Retro-inspired decor for spaces that refuse to be boring. Limited
              finds, playful design, curated in small batches.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Shop
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  All pieces
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?filter=new"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  New arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?filter=bestseller"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  Best sellers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Categories
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {CATEGORY_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/shop?category=${slug}`}
                    className="text-ink-muted transition-colors hover:text-ink"
                  >
                    {CATEGORY_LABELS[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Maison
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://maisonretro.shop"
                  className="text-ink-muted transition-colors hover:text-ink"
                  rel="noopener noreferrer"
                >
                  maisonretro.shop
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border-soft)] pt-10 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maison Retro. All rights reserved.</p>
          <p className="max-w-md leading-relaxed">
            Secure checkout · Easy returns · Designed for standout spaces
          </p>
        </div>
      </div>
    </footer>
  );
}
