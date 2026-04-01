"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SPOTS = [
  {
    title: "The entry moment",
    copy: "A lamp or catchall that says welcome in full color.",
    href: "/shop?category=lamps",
  },
  {
    title: "The coffee table",
    copy: "Sculptural objects and trays worth leaving out.",
    href: "/shop?category=tabletop",
  },
  {
    title: "The shelf story",
    copy: "Layer retro icons with vases and limited pieces.",
    href: "/shop?category=decorative-objects",
  },
];

export function StatementCorners() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Statement pieces for every corner
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink-muted">
          Design pieces with charm, color, and attitude—styled like a boutique,
          shipped like a dream.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SPOTS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <Link
                href={s.href}
                className="block h-full rounded-[1.75rem] border border-[var(--border-soft)] bg-cream/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/10 hover:shadow-[var(--shadow-card)]"
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.copy}
                </p>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-tangerine">
                  Shop the edit →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
