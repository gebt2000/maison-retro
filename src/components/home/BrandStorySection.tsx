"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandStorySection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-soft)] bg-cream-dark/50 py-[var(--section-pad-y)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-lavender/20 blur-3xl"
      />
      <p
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-4 select-none font-display text-[clamp(6rem,22vw,14rem)] font-medium leading-none tracking-tighter text-ink/[0.04] sm:right-10"
      >
        MR
      </p>

      <div className="relative mx-auto max-w-[1600px] px-[var(--section-pad-x)]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 lg:pt-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-muted">
              Maison Retro
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
              Objects that do more than sit{" "}
              <span className="italic text-tangerine">pretty.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink-muted">
              We curate playful retro-inspired pieces for homes with personality.
              Color, charm, and conversation starters without the clutter of a
              generic big-box shop.
            </p>
            <ul className="mt-10 space-y-4 text-sm leading-relaxed text-ink-muted">
              <li className="flex gap-4 border-l-2 border-tangerine/40 pl-5">
                Small-batch and limited runs, refreshed often.
              </li>
              <li className="flex gap-4 border-l-2 border-blush/60 pl-5">
                Editorial presentation so every piece is photo-ready.
              </li>
              <li className="flex gap-4 border-l-2 border-mint/50 pl-5">
                Delivery &amp; packaging that feels considered.
              </li>
            </ul>
            <Button className="mt-12" variant="outline" size="lg" asChild>
              <Link href="/about">Read our story</Link>
            </Button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2 lg:gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="flex flex-col justify-between rounded-[1.5rem] border border-[var(--border-soft)] bg-surface p-8 shadow-[var(--shadow-card)] sm:col-span-2 sm:flex-row sm:items-center sm:gap-10 sm:p-10 lg:col-span-2"
            >
              <p className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-tight text-ink">
                A little weird.
                <br />
                <span className="italic text-tangerine">A lot wonderful.</span>
              </p>
              <p className="mt-6 max-w-xs text-sm text-ink-muted sm:mt-0">
                Design pieces with charm, color, and attitude for shelves that
                refuse to whisper.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-gradient-to-br from-blush/30 to-blush/5 p-8"
            >
              <p className="font-display text-xl font-medium text-ink">
                Not basic decor.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-ink-muted">
                Playful interiors
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14, duration: 0.45 }}
              className="flex flex-col justify-between rounded-[1.5rem] border border-dashed border-ink/12 bg-butter/15 p-8"
            >
              <p className="text-sm leading-relaxed text-ink-muted">
                Curated objects for spaces that love nostalgia, color, and a
                touch of the unexpected.
              </p>
              <span className="mt-6 font-display text-lg italic text-ink/40">
                The edit
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
