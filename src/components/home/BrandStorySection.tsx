"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandStorySection() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-cream-dark/40 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Why Maison Retro
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Objects that do more than sit pretty.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              We curate playful retro-inspired pieces for homes with personality.
              Color, charm, and conversation starters—without the clutter of a
              generic big-box shop.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tangerine" />
                Small-batch and limited runs, refreshed often.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                Design-forward presentation—every piece is photo-ready.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                Easy delivery &amp; thoughtful packaging.
              </li>
            </ul>
            <Button className="mt-10" variant="outline" asChild>
              <Link href="/about">Read our story</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-3xl border border-[var(--border-soft)] bg-surface p-8 shadow-[var(--shadow-card)]">
              <p className="font-display text-2xl font-semibold text-ink">
                A little weird.
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-tangerine">
                A lot wonderful.
              </p>
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--border-soft)] bg-blush/25 p-8 sm:col-span-2 lg:col-span-1 lg:row-span-1">
              <p className="text-sm font-medium text-ink">
                Not basic decor.
              </p>
              <p className="mt-4 text-xs uppercase tracking-wider text-ink-muted">
                For playful interiors
              </p>
            </div>
            <div className="rounded-3xl border border-dashed border-ink/15 bg-butter/20 p-8 sm:col-span-2 lg:col-span-1">
              <p className="text-sm leading-relaxed text-ink-muted">
                Curated objects for spaces that love color, nostalgia, and a
                touch of the unexpected.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
