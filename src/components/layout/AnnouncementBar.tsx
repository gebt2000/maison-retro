"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Limited finds, updated often",
  "Statement decor with personality",
  "Free shipping over $120",
  "New arrivals just dropped",
];

export function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % MESSAGES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative z-[60] overflow-hidden border-b border-[var(--border-soft)] bg-ink text-cream">
      <div className="mx-auto flex h-10 max-w-[1600px] items-center justify-center px-[var(--section-pad-x)] text-center text-[11px] font-semibold tracking-[0.22em] sm:text-xs">
        <AnimatePresence mode="wait">
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-cream/95"
          >
            {MESSAGES[i]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
