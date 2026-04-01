import Link from "next/link";
import { ProductGrid } from "@/components/shop/ProductGrid";
import type { Product } from "@/lib/products";

type Props = {
  title: string;
  subtitle?: string;
  products: Product[];
  href: string;
  ctaLabel?: string;
  id?: string;
  tone?: "cream" | "surface";
};

export function FeaturedCollection({
  title,
  subtitle,
  products: list,
  href,
  ctaLabel = "See all",
  id,
  tone = "cream",
}: Props) {
  return (
    <section
      id={id}
      className={
        tone === "surface"
          ? "border-b border-[var(--border-soft)] bg-surface py-20 sm:py-24"
          : "border-b border-[var(--border-soft)] bg-cream py-20 sm:py-24"
      }
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 max-w-xl text-sm text-ink-muted">{subtitle}</p>
            )}
          </div>
          <Link
            href={href}
            className="text-sm font-medium text-tangerine underline-offset-4 hover:underline"
          >
            {ctaLabel}
          </Link>
        </div>
        <div className="mt-12">
          <ProductGrid products={list} />
        </div>
      </div>
    </section>
  );
}
