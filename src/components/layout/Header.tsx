"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useStore } from "@/context/store-context";
import { cn } from "@/lib/utils";
import { CATEGORY_LABELS, CATEGORY_SLUGS } from "@/lib/categories";
import { BrandLogo, BrandLogoLink } from "@/components/brand/BrandLogo";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?filter=new", label: "New Arrivals" },
  { href: "/shop?filter=bestseller", label: "Best Sellers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { setCartOpen, setSearchOpen, cartCount } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const id = requestAnimationFrame(() => {
      setMobileOpen(false);
      setCatOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-cream/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-cream/70">
        <div className="mx-auto flex min-h-[4.75rem] max-w-[1600px] items-center gap-4 px-[var(--section-pad-x)] py-2 sm:min-h-[5.5rem] sm:py-2.5">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <BrandLogoLink variant="header" priority className="-ml-0.5" />

          <nav
            className="ml-4 hidden flex-1 items-center gap-1 lg:flex"
            aria-label="Main"
          >
            {NAV.map((item) => {
              const active =
                pathname === item.href.split("?")[0] &&
                !item.href.includes("?");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors",
                    active ? "text-ink" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-1 left-3 right-3 h-[2px] origin-left rounded-full bg-tangerine transition-transform duration-300 ease-out",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
            <div
              className="relative"
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink",
                  catOpen && "text-ink",
                )}
                aria-expanded={catOpen}
                aria-haspopup="true"
              >
                Categories
              </button>
              <AnimatePresence>
                {catOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 pt-2"
                  >
                    <div className="min-w-[220px] rounded-2xl border border-[var(--border-soft)] bg-surface p-2 shadow-[var(--shadow-card)]">
                      {CATEGORY_SLUGS.map((slug) => (
                        <Link
                          key={slug}
                          href={`/shop?category=${slug}`}
                          className="block rounded-xl px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-cream-dark hover:text-ink"
                        >
                          {CATEGORY_LABELS[slug]}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
              aria-label="Search"
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link
              href="/account"
              className="hidden h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 sm:flex"
              aria-label="Account"
            >
              <User className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="/wishlist"
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-cherry px-1 text-[10px] font-semibold text-white">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative flex h-full w-[min(100%,20rem)] flex-col bg-cream shadow-[var(--shadow-lift)]"
            >
              <div className="flex min-h-[4.75rem] items-center justify-between gap-3 border-b border-[var(--border-soft)] px-4 py-2">
                <Link
                  href="/"
                  className="inline-flex min-w-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Maison Retro home"
                >
                  <BrandLogo variant="drawer" />
                </Link>
                <span className="sr-only">Navigation menu</span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5"
                  aria-label="Close"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Categories
                </p>
                {CATEGORY_SLUGS.map((slug) => (
                  <Link
                    key={slug}
                    href={`/shop?category=${slug}`}
                    className="rounded-xl px-3 py-2.5 text-sm text-ink-muted"
                  >
                    {CATEGORY_LABELS[slug]}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
