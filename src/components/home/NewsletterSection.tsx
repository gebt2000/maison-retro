"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="border-b border-[var(--border-soft)] bg-gradient-to-br from-blush/25 via-cream to-butter/20 py-[var(--section-pad-y)]">
      <div className="mx-auto max-w-[1600px] px-[var(--section-pad-x)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16"
        >
          <div className="lg:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-muted">
              List
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              First dibs on{" "}
              <span className="italic text-cherry">new arrivals.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              Short notes, no spam—drops, color stories, and styling ideas in
              your inbox.
            </p>
          </div>

          <div className="lg:col-span-7">
            <form
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-surface/90 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="h-14 flex-1 rounded-2xl border border-[var(--border-soft)] bg-cream/90 px-5 text-base text-ink outline-none transition-shadow placeholder:text-ink-muted/50 focus:border-tangerine/50 focus:ring-2 focus:ring-tangerine/15"
                />
                <Button type="submit" size="lg" className="h-14 shrink-0 px-10">
                  {sent ? "You’re in" : "Subscribe"}
                </Button>
              </div>
              {sent && (
                <p className="mt-4 text-xs text-ink-muted">
                  Thanks—demo form; connect your ESP when you launch.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
