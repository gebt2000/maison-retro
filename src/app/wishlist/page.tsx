"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useStore } from "@/context/store-context";
import { products, type Product } from "@/lib/products";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const { wishlistSlugs } = useStore();
  const saved = useMemo(() => {
    return wishlistSlugs
      .map((slug) => products.find((p) => p.slug === slug))
      .filter((p): p is Product => p != null);
  }, [wishlistSlugs]);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
        Wishlist
      </h1>
      <p className="mt-2 max-w-lg text-sm text-ink-muted">
        Saved pieces for later. Your personal shortlist of color and charm.
      </p>

      {saved.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-[var(--border-soft)] bg-surface/80 py-16 text-center">
          <p className="text-ink-muted">Nothing saved yet.</p>
          <Button className="mt-6" asChild>
            <Link href="/shop">Discover pieces</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-12">
          <ProductGrid products={saved} />
        </div>
      )}
    </div>
  );
}
