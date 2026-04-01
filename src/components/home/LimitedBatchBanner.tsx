"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function LimitedBatchBanner() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-soft)] bg-ink py-[clamp(3.5rem,8vw,5.5rem)] text-cream">
      <p
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[var(--section-pad-x)] select-none font-display text-[clamp(2.75rem,14vw,11rem)] font-medium leading-none tracking-tight text-cream/[0.07] sm:text-[clamp(4rem,16vw,11rem)]"
      >
        LIMITED
      </p>
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-10 px-[var(--section-pad-x)] lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-cream/55">
            Small batch
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-cream">
            Drops don’t stick around.
            <br />
            <span className="italic text-tangerine">Neither should you.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
            When a run is gone, it’s gone. New color stories land often.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          <Button
            variant="secondary"
            size="lg"
            className="border-cream/20 bg-cream text-ink hover:bg-white"
            asChild
          >
            <Link href="/shop?filter=limited">Shop limited pieces</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
