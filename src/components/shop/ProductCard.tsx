"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Plus, Eye, X } from "lucide-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { Product } from "@/lib/products";
import { CATEGORY_LABELS } from "@/lib/categories";
import { useStore } from "@/context/store-context";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [quickOpen, setQuickOpen] = useState(false);
  const wish = isInWishlist(product.slug);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-surface shadow-[var(--shadow-card)] transition-all duration-500 ease-out",
          "hover:-translate-y-[6px] hover:border-ink/[0.07] hover:shadow-[var(--shadow-lift)]",
        )}
      >
        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          {product.limited && (
            <span className="rounded-full bg-cherry px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              Limited
            </span>
          )}
          {product.isNew && (
            <span className="rounded-full bg-mint/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
              New
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="rounded-full bg-butter/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
              Best seller
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          className={cn(
            "absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-surface/90 backdrop-blur-sm transition-colors",
            wish ? "text-cherry" : "text-ink hover:bg-cream-dark",
          )}
          aria-label={wish ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className="h-[18px] w-[18px]"
            strokeWidth={1.5}
            fill={wish ? "currentColor" : "none"}
          />
        </button>

        <Link href={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
            <span
              className="absolute bottom-4 left-4 z-10 font-display text-3xl font-medium tabular-nums text-cream/25 transition-colors duration-500 group-hover:text-cream/50"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </Link>

        <div className="relative p-5 pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            {CATEGORY_LABELS[product.category]}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="mt-1 font-display text-lg font-medium leading-snug tracking-tight text-ink transition-colors group-hover:text-tangerine">
              {product.name}
            </h3>
          </Link>
          <div className="mt-2 flex flex-wrap items-baseline gap-2">
            <span className="font-display text-lg font-medium tabular-nums tracking-tight text-ink">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice != null && (
              <span className="text-sm text-ink-muted line-through tabular-nums">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <div className="mt-4 flex gap-2 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
            <Button
              type="button"
              size="sm"
              variant="primary"
              className="flex-1"
              disabled={!product.inStock}
              onClick={() => addToCart(product, 1)}
            >
              <Plus className="h-4 w-4" strokeWidth={2} />
              Quick add
            </Button>
            <Dialog.Root open={quickOpen} onOpenChange={setQuickOpen}>
              <Dialog.Trigger asChild>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="shrink-0 px-3"
                  aria-label="Quick view"
                >
                  <Eye className="h-4 w-4" strokeWidth={1.5} />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[90] bg-ink/40 backdrop-blur-sm" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[91] w-[min(100%-2rem,420px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[var(--border-soft)] bg-surface p-6 shadow-[var(--shadow-lift)] outline-none">
                  <Dialog.Title className="font-display text-xl font-semibold text-ink">
                    {product.name}
                  </Dialog.Title>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-2xl bg-cream-dark">
                    <Image
                      src={product.images[0]}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {product.shortDescription}
                  </p>
                  <p className="mt-2 font-medium text-ink">
                    {formatPrice(product.price)}
                  </p>
                  <div className="mt-6 flex gap-2">
                    <Button
                      className="flex-1"
                      disabled={!product.inStock}
                      onClick={() => {
                        addToCart(product, 1);
                        setQuickOpen(false);
                      }}
                    >
                      Add to bag
                    </Button>
                    <Button variant="outline" asChild>
                      <Link
                        href={`/product/${product.slug}`}
                        onClick={() => setQuickOpen(false)}
                      >
                        Full details
                      </Link>
                    </Button>
                  </div>
                  <Dialog.Close
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:bg-ink/5 hover:text-ink"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
