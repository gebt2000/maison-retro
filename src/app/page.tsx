import type { Metadata } from "next";
import { products } from "@/lib/products";
import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { StatementCorners } from "@/components/home/StatementCorners";
import { LimitedBatchBanner } from "@/components/home/LimitedBatchBanner";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { InstagramGallery } from "@/components/home/InstagramGallery";

export const metadata: Metadata = {
  title:
    "Maison Retro | Retro-Inspired Decor & Statement Pieces",
  description:
    "Discover colorful, retro-inspired decor and unique statement pieces with personality. Limited finds, playful design, and curated objects for standout spaces. Boutique home decor at maisonretro.shop.",
  keywords: [
    "retro home decor",
    "colorful home decor",
    "statement decor pieces",
    "unique decor objects",
    "boutique home decor",
    "cute retro decor",
    "playful luxury home decor",
  ],
  openGraph: {
    title: "Maison Retro | Retro-Inspired Decor & Statement Pieces",
    description:
      "Limited finds, playful design, and curated decor for homes with personality.",
    url: "https://maisonretro.shop",
    siteName: "Maison Retro",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  const sortedNew = [...products].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
  const newArrivals =
    products.filter((p) => p.isNew).length > 0
      ? products
          .filter((p) => p.isNew)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime(),
          )
          .slice(0, 3)
      : sortedNew.slice(0, 3);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 3);
  const favorites = products
    .filter((p) => p.isBestSeller || p.isNew)
    .slice(0, 6);

  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedCollection
        id="new-arrivals"
        title="New arrivals"
        subtitle="Fresh drops, limited runs, and restocks worth the refresh."
        products={newArrivals}
        href="/shop?filter=new"
        ctaLabel="Shop new"
        tone="surface"
        layout="editorial"
      />
      <FeaturedCollection
        id="best-sellers"
        title="Best sellers"
        subtitle="The pieces everyone’s styling first."
        products={bestSellers.length ? bestSellers : sortedNew.slice(0, 3)}
        href="/shop?filter=bestseller"
        ctaLabel="See best sellers"
        tone="cream"
        layout="editorial"
      />
      <CategoryTiles />
      <StatementCorners />
      <LimitedBatchBanner />
      <BrandStorySection />
      <FeaturedCollection
        id="customer-favorites"
        title="Customer favorites"
        subtitle="Curated objects for playful interiors."
        products={favorites}
        href="/shop"
        ctaLabel="Shop all"
        tone="surface"
      />
      <InstagramGallery />
      <NewsletterSection />
    </>
  );
}
