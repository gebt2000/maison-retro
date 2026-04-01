"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { InteractiveBrandBag } from "@/components/brand/InteractiveBrandBag";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const heroProduct =
  products.find((p) => p.slug === "day-off-ceramic-bust-vase") ??
  products[0]!;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.4 });
  const smoothY = useSpring(my, { stiffness: 90, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) / 35);
    my.set((e.clientY - (r.top + r.height / 2)) / 35);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const lineDelay = reduceMotion ? 0 : 0.08;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative min-h-[min(92vh,920px)] overflow-hidden border-b border-[var(--border-soft)] bg-cream"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-20 h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-gradient-to-br from-blush/40 via-lavender/25 to-transparent blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.06, 1], opacity: [0.5, 0.65, 0.5] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-16 bottom-24 h-72 w-72 rounded-full bg-butter/35 blur-3xl"
          animate={reduceMotion ? undefined : { y: [0, 24, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="absolute right-[8%] top-[18%] hidden h-px w-32 rotate-[-35deg] bg-gradient-to-r from-transparent via-tangerine/50 to-transparent lg:block"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1600px] gap-12 px-[var(--section-pad-x)] pb-16 pt-24 lg:grid-cols-12 lg:items-end lg:gap-6 lg:pb-20 lg:pt-28">
        <div className="relative z-[1] lg:col-span-7 lg:row-span-1 lg:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 shrink-0 bg-tangerine sm:w-14" aria-hidden />
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-ink-muted sm:text-[11px]">
              Vol. 01 — Spring edit · maisonretro.shop
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: lineDelay }}
            className="mt-8 font-display text-[clamp(2.85rem,9.2vw,6.75rem)] font-medium leading-[0.92] tracking-[-0.03em] text-ink"
          >
            <span className="block">Spaces with</span>
            <span className="block font-normal italic text-tangerine">
              personality.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: lineDelay * 2 }}
            className="mt-10 max-w-md space-y-3 border-l-2 border-ink/10 pl-6"
          >
            <p className="text-lg font-medium leading-snug text-ink sm:text-xl">
              Retro-inspired decor for homes that refuse the beige default.
            </p>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              Limited finds · Unique designs · Objects that start conversations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: lineDelay * 3 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" variant="primary" asChild>
              <Link href="/shop?filter=new">Shop new arrivals</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/shop?filter=bestseller">Best sellers</Link>
            </Button>
            <Link
              href="/shop"
              className="group ml-1 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
              View full collection
            </Link>
          </motion.div>
        </div>

        <div className="relative z-[1] lg:col-span-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mb-4 hidden text-right text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-muted lg:block"
          >
            Featured object
          </motion.p>
          <motion.div
            initial={{ opacity: 0, rotate: -2, y: 20 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.25rem] border border-dashed border-ink/12 sm:-inset-4 sm:rounded-[2.5rem]"
            />
            <div
              aria-hidden
              className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-mint/30 blur-2xl sm:-right-4 sm:-top-4 sm:h-32 sm:w-32"
            />
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-cream-dark shadow-[var(--shadow-lift)] sm:rounded-[2.25rem]"
            >
              <Image
                src={heroProduct.images[0]}
                alt={heroProduct.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 42vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/20 via-transparent to-blush/15" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-ink/25 to-transparent" />
            </motion.div>
            <div className="pointer-events-auto absolute -bottom-2 -right-2 z-20 sm:-bottom-4 sm:-right-3 md:-right-5">
              <InteractiveBrandBag placement="hero" />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-6 font-display text-sm font-medium italic text-ink-muted lg:text-right"
            >
              {heroProduct.name}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
