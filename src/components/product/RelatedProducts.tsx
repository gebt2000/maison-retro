import { ProductGrid } from "@/components/shop/ProductGrid";
import type { Product } from "@/lib/products";

type Props = {
  title: string;
  products: Product[];
};

export function RelatedProducts({ title, products: list }: Props) {
  if (list.length === 0) return null;
  return (
    <section className="border-t border-[var(--border-soft)] bg-cream/50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        <div className="mt-10">
          <ProductGrid products={list} />
        </div>
      </div>
    </section>
  );
}
