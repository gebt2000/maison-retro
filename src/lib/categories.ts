export const CATEGORY_SLUGS = [
  "lamps",
  "vases",
  "decorative-objects",
  "tabletop",
  "wall-decor",
  "cute-finds",
  "retro-icons",
  "limited-pieces",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const CATEGORY_LABELS: Record<CategorySlug, string> = {
  lamps: "Lamps",
  vases: "Vases",
  "decorative-objects": "Decorative Objects",
  tabletop: "Tabletop",
  "wall-decor": "Wall Decor",
  "cute-finds": "Cute Finds",
  "retro-icons": "Retro Icons",
  "limited-pieces": "Limited Pieces",
};

export const FILTER_COLORS = [
  "Blush",
  "Butter",
  "Tangerine",
  "Sky",
  "Cherry",
  "Mint",
  "Lavender",
  "Cream",
  "Multi",
] as const;
