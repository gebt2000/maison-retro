"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SPOTS = [
  {
    title: "The entry moment",
    copy: "A lamp or catchall that says welcome in full color.",
    href: "/shop?category=lamps",
    accent: "from-sky/20 to-transparent",
  },
  {
    title: "The coffee table",
    copy: "Sculptural objects and trays worth leaving out.",
    href: "/shop?category=tabletop",
    accent: "from-tangerine/15 to-transparent",
  },
  {
    title: "The shelf story",
    copy: "Layer retro icons with vases and limited pieces.",
    href: "/shop?category=decorative-objects",
    accent: "from-lavender/20 to-transparent",
  },
];

export function StatementCorners() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-cream py-[var(--section-pad-y)]">
      <div className="mx-auto max-w-[1600px] px-[var(--section-pad-x)]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-muted">
            Styling
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink">
            Statement pieces for{" "}
            <span className="italic text-cherry/90">every corner.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base text-ink-muted">
            Boutique presentation and editorial spacing. Pieces that read like a
            lookbook, not a catalog spread.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {SPOTS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={s.href}
                className="group relative block h-full overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/10 hover:shadow-[var(--shadow-lift)] md:p-9"
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} blur-2xl transition-opacity group-hover:opacity-100`}
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {s.copy}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-tangerine">
                  Shop the edit
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
