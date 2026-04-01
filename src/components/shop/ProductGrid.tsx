import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  startIndex = 0,
}: {
  products: Product[];
  startIndex?: number;
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-[var(--border-soft)] bg-surface/80 py-20 text-center text-sm text-ink-muted">
        No pieces match those filters—try widening your search.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-3">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={startIndex + i} />
      ))}
    </div>
  );
}
