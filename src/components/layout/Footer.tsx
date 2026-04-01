import Link from "next/link";
import { CATEGORY_LABELS, CATEGORY_SLUGS } from "@/lib/categories";
import { BrandLogoLink } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[var(--border-soft)] bg-cream-dark/70">
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-8 right-0 select-none font-display text-[clamp(4rem,15vw,10rem)] font-medium leading-none tracking-tighter text-ink/[0.06]"
      >
        Retro
      </p>
      <div className="relative mx-auto max-w-[1600px] px-[var(--section-pad-x)] py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <BrandLogoLink variant="footer" className="rounded-lg" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink-muted">
              Retro-inspired decor for spaces that refuse to be boring. Limited
              finds, playful design, curated in small batches.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Shop
              </p>
              <ul className="mt-5 space-y-3 text-sm">
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Categories
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 sm:gap-x-8">
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Maison
              </p>
              <ul className="mt-5 space-y-3 text-sm">
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
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border-soft)] pt-10 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maison Retro. All rights reserved.</p>
          <p className="max-w-md leading-relaxed">
            Secure checkout · Easy returns · Designed for standout spaces
          </p>
        </div>
      </div>
    </footer>
  );
}
