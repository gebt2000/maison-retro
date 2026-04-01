"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import { CATEGORY_LABELS } from "@/lib/categories";
import { useStore } from "@/context/store-context";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "./ProductGallery";

type Props = {
  product: Product;
  looksGreat: Product[];
};

export function ProductDetailClient({ product, looksGreat }: Props) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const wish = isInWishlist(product.slug);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="mt-10 lg:mt-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            {CATEGORY_LABELS[product.category]}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className="font-display text-2xl font-semibold tabular-nums text-ink">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice != null && (
              <span className="text-lg text-ink-muted line-through tabular-nums">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.limited && (
              <span className="rounded-full bg-cherry px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Limited stock
              </span>
            )}
            {!product.inStock && (
              <span className="rounded-full bg-ink/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                Sold out
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-[var(--border-soft)] bg-surface">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full text-ink hover:bg-cream-dark"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[2rem] text-center text-sm font-medium tabular-nums">
                {qty}
              </span>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full text-ink hover:bg-cream-dark"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button
              size="lg"
              className="min-w-[200px] flex-1 sm:flex-none"
              disabled={!product.inStock}
              onClick={() => addToCart(product, qty)}
            >
              Add to bag
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 w-12 shrink-0 p-0"
              aria-label={wish ? "Remove from wishlist" : "Add to wishlist"}
              onClick={() => toggleWishlist(product.slug)}
            >
              <Heart
                className={cn("h-5 w-5", wish && "fill-cherry text-cherry")}
                strokeWidth={1.5}
              />
            </Button>
          </div>

          <p className="mt-6 text-sm text-ink-muted">
            Ships within 2–4 business days. Free shipping over $120. Easy returns
            within 30 days.
          </p>

          {looksGreat.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Looks great with
              </h3>
              <ul className="mt-4 flex gap-4 overflow-x-auto pb-2">
                {looksGreat.map((p) => (
                  <li key={p.slug} className="w-28 shrink-0">
                    <Link
                      href={`/product/${p.slug}`}
                      className="group block space-y-2"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl border border-[var(--border-soft)] bg-cream-dark">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="112px"
                        />
                      </div>
                      <p className="line-clamp-2 text-xs font-medium text-ink group-hover:underline">
                        {p.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Accordion.Root
            type="single"
            collapsible
            className="mt-12 border-t border-[var(--border-soft)]"
          >
            <Accordion.Item value="details" className="border-b border-[var(--border-soft)]">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-medium text-ink group">
                  Product details
                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    strokeWidth={1.5}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
                <div className="pb-4 text-sm leading-relaxed text-ink-muted">
                  {product.description}
                </div>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="care" className="border-b border-[var(--border-soft)]">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-medium text-ink group">
                  Care &amp; materials
                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    strokeWidth={1.5}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <div className="pb-4 text-sm leading-relaxed text-ink-muted">
                  Wipe with a soft cloth. Avoid harsh solvents. Indoor use
                  recommended. Each piece may show subtle handmade variation—by
                  design.
                </div>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="shipping" className="border-b border-[var(--border-soft)]">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-medium text-ink group">
                  Shipping &amp; returns
                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    strokeWidth={1.5}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <div className="pb-4 text-sm leading-relaxed text-ink-muted">
                  We pack with care. Tracking sent when your order ships. 30-day
                  returns on unused items in original packaging.
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <section className="mt-12 rounded-2xl border border-[var(--border-soft)] bg-surface p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Reviews
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Loved by collectors of color.{" "}
              <span className="font-medium text-ink">4.9</span> average from
              verified buyers (demo).
            </p>
            <div className="mt-4 space-y-3 text-sm text-ink-muted">
              <p>
                <span className="font-medium text-ink">Maya</span> — “Feels like
                a gallery find. Instant conversation starter.”
              </p>
              <p>
                <span className="font-medium text-ink">Jordan</span> — “Quality
                is there. Packaging was gorgeous.”
              </p>
            </div>
          </section>
        </div>
      </div>

      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border-soft)] bg-surface/95 px-4 py-3 backdrop-blur-md transition-opacity duration-300 sm:px-6",
          showSticky ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{product.name}</p>
            <p className="text-sm text-ink-muted tabular-nums">
              {formatPrice(product.price)}
            </p>
          </div>
          <Button
            disabled={!product.inStock}
            onClick={() => addToCart(product, qty)}
          >
            Add to bag
          </Button>
        </div>
      </div>
    </>
  );
}
