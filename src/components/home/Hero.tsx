"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InteractiveBrandBag } from "@/components/brand/InteractiveBrandBag";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const heroProduct =
  products.find((p) => p.slug === "day-off-ceramic-bust-vase") ??
  products[0]!;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-soft)] bg-cream">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          className="absolute -right-20 top-24 h-48 w-48 rounded-full bg-blush/35 blur-2xl"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-32 left-10 h-36 w-36 rounded-full bg-butter/40 blur-2xl"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute left-1/4 top-1/3 h-24 w-24 rotate-12 rounded-3xl border-2 border-sky/40"
          animate={{ rotate: [12, 18, 12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="absolute right-[18%] top-[20%] h-16 w-16 rounded-full border-2 border-tangerine/35"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-6 lg:px-10 lg:py-24">
        <div className="max-w-xl lg:max-w-none">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted"
          >
            Maison Retro · maisonretro.shop
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-ink"
          >
            Retro-inspired decor for spaces that refuse to be boring.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 space-y-2 text-lg text-ink-muted sm:text-xl"
          >
            <p className="font-medium text-ink">Statement pieces with personality.</p>
            <p>Limited finds · Unique designs</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button size="lg" variant="primary" asChild>
              <Link href="/shop?filter=new">Shop New Arrivals</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop?filter=bestseller">Explore Best Sellers</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-cream-dark shadow-[var(--shadow-lift)] sm:rounded-[2.25rem]">
            <Image
              src={heroProduct.images[0]}
              alt={heroProduct.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/15 via-transparent to-blush/10" />
          </div>
          <div className="pointer-events-auto absolute -bottom-1 -right-1 z-20 sm:-bottom-3 sm:-right-2 md:-right-4">
            <InteractiveBrandBag placement="hero" />
          </div>
          <p className="mt-4 text-center text-xs text-ink-muted lg:text-right">
            Featured: {heroProduct.name}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
