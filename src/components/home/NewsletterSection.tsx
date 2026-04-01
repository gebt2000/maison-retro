"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="border-b border-[var(--border-soft)] bg-blush/20 py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--border-soft)] bg-surface p-8 shadow-[var(--shadow-card)] sm:p-12"
        >
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink">
            First dibs on new arrivals
          </h2>
          <p className="mt-3 text-center text-sm text-ink-muted">
            Short notes, no spam—just color, drops, and styling ideas.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@email.com"
              className="h-12 flex-1 rounded-full border border-[var(--border-soft)] bg-cream/80 px-5 text-sm text-ink outline-none transition-shadow focus:border-tangerine/40 focus:ring-2 focus:ring-tangerine/20"
            />
            <Button type="submit" size="lg" className="shrink-0 sm:px-8">
              {sent ? "You’re in" : "Subscribe"}
            </Button>
          </form>
          {sent && (
            <p className="mt-4 text-center text-xs text-ink-muted">
              Thanks—this is a demo form; connect your ESP when you go live.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
