"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORY_LABELS, CATEGORY_SLUGS } from "@/lib/categories";
import { cn } from "@/lib/utils";

const ACCENTS: Record<string, string> = {
  lamps: "bg-butter/50 text-ink",
  vases: "bg-blush/45 text-ink",
  "decorative-objects": "bg-lavender/40 text-ink",
  tabletop: "bg-mint/40 text-ink",
  "wall-decor": "bg-sky/35 text-ink",
  "cute-finds": "bg-tangerine/25 text-ink",
  "retro-icons": "bg-cherry/15 text-ink",
  "limited-pieces": "bg-cream-dark text-ink",
};

export function CategoryTiles() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Shop by category
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink-muted">
              From lamps to wall moments—each edit is chosen for color, charm,
              and attitude.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-tangerine underline-offset-4 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORY_SLUGS.map((slug, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
            >
              <Link
                href={`/shop?category=${slug}`}
                className={cn(
                  "group flex min-h-[120px] flex-col justify-between rounded-3xl border border-[var(--border-soft)] p-6 transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
                  ACCENTS[slug] ?? "bg-cream text-ink",
                )}
              >
                <span className="font-display text-xl font-semibold tracking-tight">
                  {CATEGORY_LABELS[slug]}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-ink/60 group-hover:text-ink">
                  Shop →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
