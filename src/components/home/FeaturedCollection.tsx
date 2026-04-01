"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  /** Editorial = oversized type, more air, spotlight grid */
  layout?: "classic" | "editorial";
};

export function FeaturedCollection({
  title,
  subtitle,
  products: list,
  href,
  ctaLabel = "See all",
  id,
  tone = "cream",
  layout = "classic",
}: Props) {
  const editorial = layout === "editorial";
  const sectionClass =
    tone === "surface"
      ? "border-b border-[var(--border-soft)] bg-surface"
      : "border-b border-[var(--border-soft)] bg-cream";

  return (
    <section id={id} className={sectionClass}>
      <div
        className="mx-auto max-w-[1600px] px-[var(--section-pad-x)] py-[var(--section-pad-y)]"
      >
        <div
          className={
            editorial
              ? "flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
              : "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={editorial ? "max-w-3xl" : ""}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-muted">
              Collection
            </p>
            <h2
              className={
                editorial
                  ? "mt-5 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink"
                  : "mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
              }
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={
                  editorial
                    ? "mt-6 max-w-lg text-base leading-relaxed text-ink-muted"
                    : "mt-3 max-w-xl text-sm text-ink-muted"
                }
              >
                {subtitle}
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="shrink-0"
          >
            <Link
              href={href}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-tangerine"
            >
              <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={editorial ? "mt-16 lg:mt-20" : "mt-12"}
        >
          <ProductGrid
            products={list}
            gapClass={editorial ? "gap-10 lg:gap-14 xl:gap-16" : undefined}
          />
        </motion.div>
      </div>
    </section>
  );
}
