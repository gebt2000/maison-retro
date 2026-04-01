import type { CategorySlug } from "./categories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: CategorySlug;
  colors: string[];
  limited: boolean;
  inStock: boolean;
  description: string;
  shortDescription: string;
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  looksGreatWith?: string[];
  /** ISO date string for sorting */
  createdAt: string;
};

const img = (filename: string) => `/products/${filename}`;

export const products: Product[] = [
  {
    id: "1",
    slug: "lumi-pal-buddy-lamps",
    name: "Lumi-Pal Sculptural Lamps",
    price: 198,
    category: "lamps",
    colors: ["Sky", "Lavender", "Butter", "Cherry", "Multi"],
    limited: true,
    inStock: true,
    isNew: true,
    isBestSeller: true,
    shortDescription:
      "Two collectible character lights—frosted globe heads, bubbly bodies, hands-in-pockets attitude.",
    description:
      "A pair of sculptural table lamps that read like designer toys. Warm diffused light from each frosted globe; matte ceramic-style bodies in complementary palettes (sky & cherry, lavender & blush). Statement pieces for nightstands, shelves, or anywhere you want personality and glow.",
    images: [img("lumi-pal-buddy-lamps.png")],
    looksGreatWith: [
      "hotline-rotary-desk-lamp",
      "wiggle-coupe-duo",
    ],
    createdAt: "2026-03-28",
  },
  {
    id: "2",
    slug: "wiggle-coupe-duo",
    name: "Wiggle Coupe Duo",
    price: 118,
    category: "tabletop",
    colors: ["Blush", "Lavender", "Cherry", "Mint", "Multi"],
    limited: false,
    inStock: true,
    isNew: true,
    isBestSeller: true,
    shortDescription:
      "Frosted coupe bowls, squiggle stems, and a cheeky glass “garnish” on the rim—set of two.",
    description:
      "Memphis-meets-cocktail-hour. One glass in soft pink with a red wiggle stem and cherry bead; one in lavender with sage stem and olive accent. Frosted bowls, glossy stems—designed for dopamine decor and actual sipping.",
    images: [img("wiggle-coupe-duo.png")],
    looksGreatWith: [
      "all-natural-orange-juice-vase",
      "giddy-up-daisy-boot-vase",
    ],
    createdAt: "2026-03-27",
  },
  {
    id: "3",
    slug: "hotline-rotary-desk-lamp",
    name: "Hotline Rotary Desk Lamp",
    price: 145,
    category: "lamps",
    colors: ["Blush", "Cream", "Multi"],
    limited: false,
    inStock: true,
    isBestSeller: true,
    shortDescription:
      "Who’s calling? Style is on the line—a rotary phone base with a pink receiver shade and flexible chrome neck.",
    description:
      "Kitsch-chic lighting at its best. Cream mid-century phone body, bubblegum pink handset as the shade, warm glow from the earpiece. Adjustable gooseneck for your desk, nightstand, or the corner that needs a conversation starter.",
    images: [img("hotline-rotary-desk-lamp.png")],
    looksGreatWith: [
      "lumi-pal-buddy-lamps",
      "peace-love-beetle-tissue-holder",
    ],
    createdAt: "2026-03-25",
  },
  {
    id: "4",
    slug: "all-natural-orange-juice-vase",
    name: "All Natural Orange Juice Vase",
    price: 52,
    category: "vases",
    colors: ["Tangerine", "Cream", "Mint", "Multi"],
    limited: false,
    inStock: true,
    isNew: true,
    shortDescription:
      "Gable-top ceramic carton vibes—pop-art orange graphics and a glossy cream finish.",
    description:
      "A tall ceramic vase shaped like a vintage juice carton: bold orange circle, “ALL NATURAL” ribbon typography, and green stripe details. Fill with bright stems or let it stand alone as surreal kitchen-counter art.",
    images: [img("all-natural-orange-juice-vase.png")],
    looksGreatWith: [
      "giddy-up-daisy-boot-vase",
      "wiggle-coupe-duo",
    ],
    createdAt: "2026-03-26",
  },
  {
    id: "5",
    slug: "peace-love-beetle-tissue-holder",
    name: "Peace & Love Beetle Tissue Holder",
    price: 58,
    category: "decorative-objects",
    colors: ["Multi", "Mint", "Butter"],
    limited: false,
    inStock: true,
    shortDescription:
      "Hand-painted metal VW Beetle—tissues through the roof, hippie patchwork and smiley included.",
    description:
      "Functional sculpture with serious personality. Lime, orange, pink, and forest panels; peace signs, daisies, and polka dots. White-wall wheels and a tissue slot in the roof—retro toy energy for the bathroom or console.",
    images: [img("peace-love-beetle-tissue-holder.png")],
    looksGreatWith: [
      "hotline-rotary-desk-lamp",
      "maison-retro-maximalist-bag",
    ],
    createdAt: "2026-03-22",
  },
  {
    id: "6",
    slug: "giddy-up-daisy-boot-vase",
    name: "Giddy-Up Daisy Boot Vase",
    price: 62,
    category: "vases",
    colors: ["Butter", "Cream", "Multi"],
    limited: false,
    inStock: true,
    shortDescription:
      "Buttery yellow cowboy boot ceramic, daisy print, and a bouquet-ready opening at the shaft.",
    description:
      "High-shine glaze, chocolate sole, and scattered white daisies on the shaft—Western kitsch meets florist fantasy. Sized for a generous stem arrangement or solo as a shelf statement.",
    images: [img("giddy-up-daisy-boot-vase.png")],
    looksGreatWith: [
      "all-natural-orange-juice-vase",
      "day-off-ceramic-bust-vase",
    ],
    createdAt: "2026-03-24",
  },
  {
    id: "7",
    slug: "maison-retro-maximalist-bag",
    name: "Maison Retro Maximalist Shopper",
    price: 32,
    category: "cute-finds",
    colors: ["Multi", "Blush", "Tangerine"],
    limited: true,
    inStock: true,
    shortDescription:
      "Our house bag—marquee logo, psychedelic waves, mushroom, zebra gussets, and hot pink handles.",
    description:
      "Heavy paper boutique tote with silver grommets and cord handles. Maximalist pattern clash on purpose: marquee MAISON RETRO, surreal mushroom, wavy stripes, and polka-dot liner peek. Carry the moodboard home.",
    images: [img("maison-retro-maximalist-bag.png")],
    looksGreatWith: [
      "peace-love-beetle-tissue-holder",
      "wiggle-coupe-duo",
    ],
    createdAt: "2026-03-29",
  },
  {
    id: "8",
    slug: "day-off-ceramic-bust-vase",
    name: "Day Off Ceramic Bust Vase",
    price: 148,
    compareAtPrice: 175,
    category: "vases",
    colors: ["Mint", "Blush", "Lavender", "Multi"],
    limited: true,
    inStock: true,
    isNew: true,
    isBestSeller: true,
    shortDescription:
      "Retro spa glam—mask, cucumber eyes, pink rollers, pearls, and an open crown for blooms.",
    description:
      "Glossy ceramic bust vase: mint face mask, fuchsia lips, striped spa robe collar, and oversized pink rollers. String of pearls at the neck. Plant ranunculus, roses, or dried stems from the top—limited-run collectible energy.",
    images: [img("day-off-ceramic-bust-vase.png")],
    looksGreatWith: [
      "lumi-pal-buddy-lamps",
      "giddy-up-daisy-boot-vase",
    ],
    createdAt: "2026-03-30",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function resolveLooksGreatWith(product: Product): Product[] {
  if (!product.looksGreatWith?.length) return [];
  return product.looksGreatWith
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => Boolean(p));
}
