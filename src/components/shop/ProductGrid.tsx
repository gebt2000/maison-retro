import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  startIndex = 0,
  gapClass,
  className,
}: {
  products: Product[];
  startIndex?: number;
  gapClass?: string;
  className?: string;
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-[var(--border-soft)] bg-surface/80 py-20 text-center text-sm text-ink-muted">
        No pieces match those filters—try widening your search.
      </p>
    );
  }
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
        gapClass ?? "gap-8 lg:gap-10",
        className,
      )}
    >
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={startIndex + i} />
      ))}
    </div>
  );
}
