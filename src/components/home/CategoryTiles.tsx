"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORY_LABELS, CATEGORY_SLUGS } from "@/lib/categories";
import { cn } from "@/lib/utils";

const ACCENTS: Record<string, string> = {
  lamps: "bg-butter/55 text-ink",
  vases: "bg-blush/50 text-ink",
  "decorative-objects": "bg-lavender/45 text-ink",
  tabletop: "bg-mint/45 text-ink",
  "wall-decor": "bg-sky/40 text-ink",
  "cute-finds": "bg-tangerine/30 text-ink",
  "retro-icons": "bg-cherry/20 text-ink",
  "limited-pieces": "bg-cream-dark text-ink ring-1 ring-ink/10",
};

const HERO_SLUGS = new Set(["lamps", "limited-pieces"]);

export function CategoryTiles() {
  return (
    <section className="relative border-b border-[var(--border-soft)] bg-surface py-[var(--section-pad-y)]">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[120%] w-[45%] -translate-y-1/2 translate-x-1/4 bg-gradient-to-l from-blush/12 to-transparent blur-3xl"
      />
      <div className="relative mx-auto max-w-[1600px] px-[var(--section-pad-x)]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-muted">
              Navigate
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              Shop by{" "}
              <span className="italic text-tangerine">category.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Lamps, vases, tabletop moments. Each edit chosen for color, charm,
              and attitude.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-ink"
            >
              <span className="h-px w-8 bg-tangerine transition-all group-hover:w-12" />
              View all pieces
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {CATEGORY_SLUGS.map((slug, i) => {
            const hero = HERO_SLUGS.has(slug);
            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-4 break-inside-avoid"
              >
                <Link
                  href={`/shop?category=${slug}`}
                  className={cn(
                    "group relative flex flex-col justify-between overflow-hidden rounded-[1.35rem] border border-[var(--border-soft)] p-6 transition-all duration-500 sm:p-7",
                    "hover:-translate-y-0.5 hover:border-ink/12 hover:shadow-[var(--shadow-lift)]",
                    hero ? "min-h-[168px] sm:min-h-[192px]" : "min-h-[132px]",
                    ACCENTS[slug] ?? "bg-cream text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "font-display font-medium leading-tight tracking-tight",
                      hero ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
                    )}
                  >
                    {CATEGORY_LABELS[slug]}
                  </span>
                  <span className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/55 transition-colors group-hover:text-ink">
                    Open edit
                    <span
                      className="inline-block transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
