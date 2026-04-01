import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maison Retro curates playful retro-inspired decor with limited finds, bold color, and pieces designed to stand out.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        About
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Maison Retro
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-muted">
        We curate playful retro-inspired decor objects that bring charm, color,
        and personality into a space. Every piece should feel like a
        conversation starter, not filler.
      </p>

      <section className="mt-16 space-y-6">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Our story
        </h2>
        <p className="text-base leading-relaxed text-ink-muted">
          Maison Retro started as a moodboard that got out of hand: too many
          boring vases, not enough joy. We hunt and design objects that feel
          collectible, with bold silhouettes, nostalgic references, and palettes that
          photograph like editorial.
        </p>
      </section>

      <section className="mt-14 space-y-6">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Our point of view
        </h2>
        <p className="text-base leading-relaxed text-ink-muted">
          Playful luxury, not childish. Colorful, but controlled. We believe
          homes should have opinions. Your shelves deserve pieces with
          attitude.
        </p>
      </section>

      <section className="mt-14 space-y-6">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Designed to stand out
        </h2>
        <p className="text-base leading-relaxed text-ink-muted">
          From lamps to tabletop moments, we art-direct every detail: packaging,
          product pages, and the way a piece lands in your space. This is
          boutique ecommerce meant to feel human, curated, and memorable.
        </p>
      </section>

      <section className="mt-14 space-y-6">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Limited finds, thoughtfully curated
        </h2>
        <p className="text-base leading-relaxed text-ink-muted">
          Small batches and rotating drops keep the assortment fresh. When
          something sells through, the next color story is already in the
          works.
        </p>
      </section>

      <Button className="mt-14" size="lg" asChild>
        <Link href="/shop">Shop the collection</Link>
      </Button>
    </div>
  );
}
