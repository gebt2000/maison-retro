"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

const picks = products.slice(0, 6);

function cellClass(i: number) {
  switch (i) {
    case 0:
      return "col-span-2 aspect-[4/5] sm:col-span-2 sm:row-span-2 sm:row-start-1 sm:col-start-1 sm:aspect-auto sm:min-h-[min(52vw,360px)] lg:min-h-[400px]";
    case 1:
      return "aspect-square sm:col-start-3 sm:row-start-1 sm:aspect-auto sm:min-h-0";
    case 2:
      return "aspect-square sm:col-start-4 sm:row-start-1 sm:aspect-auto sm:min-h-0";
    case 3:
      return "aspect-square sm:col-start-3 sm:row-start-2 sm:aspect-auto sm:min-h-0";
    case 4:
      return "aspect-square sm:col-start-4 sm:row-start-2 sm:aspect-auto sm:min-h-0";
    case 5:
      return "col-span-2 aspect-[2/1] sm:col-span-2 sm:col-start-1 sm:row-start-3 sm:aspect-auto sm:min-h-[200px]";
    default:
      return "";
  }
}

export function InstagramGallery() {
  return (
    <section className="bg-surface py-[var(--section-pad-y)]">
      <div className="mx-auto max-w-[1600px] px-[var(--section-pad-x)]">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-muted">
              Moodboard
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
              On the{" "}
              <span className="italic text-lavender/90">scroll.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-ink-muted">
              Color, shape, and pieces we’d steal for our own shelves.
            </p>
          </motion.div>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-ink"
          >
            <span className="h-px w-8 bg-tangerine transition-all group-hover:w-12" />
            Shop the feed
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:grid-rows-3 sm:gap-3">
          {picks.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn("relative min-h-0", cellClass(i))}
            >
              <Link
                href={`/product/${p.slug}`}
                className="group relative block h-full min-h-[120px] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-cream-dark shadow-[var(--shadow-card)] sm:min-h-0 sm:rounded-[1.25rem]"
              >
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width:640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 font-display text-xs font-medium text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 sm:text-sm">
                  {p.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
