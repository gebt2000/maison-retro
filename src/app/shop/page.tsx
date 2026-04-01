import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopView } from "./ShopView";

export const metadata: Metadata = {
  title: "Shop | Maison Retro",
  description:
    "Browse colorful retro-inspired decor, statement lamps, vases, and limited finds. Boutique home decor with personality.",
  keywords: [
    "retro home decor",
    "colorful home decor",
    "statement decor pieces",
    "unique decor objects",
    "boutique home decor",
  ],
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto min-h-[60vh] max-w-[1400px] animate-pulse px-4 py-14 sm:px-6 lg:px-10">
          <div className="h-12 w-48 rounded-full bg-cream-dark/80" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-[1.75rem] bg-cream-dark/80"
              />
            ))}
          </div>
        </div>
      }
    >
      <ShopView />
    </Suspense>
  );
}
