"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

const picks = products.slice(0, 6);

export function InstagramGallery() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              On the moodboard
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              A scroll of color, shape, and pieces we’d steal for our own shelves.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-tangerine underline-offset-4 hover:underline"
          >
            Shop the feed
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {picks.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/product/${p.slug}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-cream-dark shadow-[var(--shadow-card)]"
              >
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
