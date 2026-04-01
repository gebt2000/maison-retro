"use client";

import { CATEGORY_LABELS, CATEGORY_SLUGS, FILTER_COLORS } from "@/lib/categories";
import { cn } from "@/lib/utils";

export type AvailabilityFilter = "all" | "in_stock" | "out_of_stock";

type Props = {
  category: string | null;
  colors: string[];
  priceBucket: string | null;
  availability: AvailabilityFilter;
  special: "none" | "new" | "bestseller" | "limited";
  onCategory: (slug: string | null) => void;
  onToggleColor: (c: string) => void;
  onPriceBucket: (b: string | null) => void;
  onAvailability: (a: AvailabilityFilter) => void;
  onSpecial: (s: Props["special"]) => void;
  onClear: () => void;
};

const PRICE_OPTIONS = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "100-150", label: "$100 – $150", min: 100, max: 150 },
  { id: "150-plus", label: "$150+", min: 150, max: 99999 },
] as const;

export { PRICE_OPTIONS };

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-left text-xs font-medium transition-colors",
        active
          ? "border-ink bg-ink text-cream"
          : "border-[var(--border-soft)] bg-surface text-ink-muted hover:border-ink/20 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

export function FilterSidebar({
  category,
  colors,
  priceBucket,
  availability,
  special,
  onCategory,
  onToggleColor,
  onPriceBucket,
  onAvailability,
  onSpecial,
  onClear,
}: Props) {
  return (
    <aside className="space-y-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-lg font-semibold text-ink">Filters</h2>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-medium text-tangerine underline-offset-4 hover:underline"
        >
          Clear all
        </button>
      </div>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Collection
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip active={special === "new"} onClick={() => onSpecial("new")}>
            New arrivals
          </Chip>
          <Chip
            active={special === "bestseller"}
            onClick={() => onSpecial("bestseller")}
          >
            Best sellers
          </Chip>
          <Chip
            active={special === "limited"}
            onClick={() => onSpecial("limited")}
          >
            Limited
          </Chip>
        </div>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Category
        </h3>
        <ul className="mt-3 space-y-1">
          <li>
            <button
              type="button"
              onClick={() => onCategory(null)}
              className={cn(
                "w-full rounded-xl px-3 py-2 text-left text-sm transition-colors",
                !category ? "bg-cream-dark font-medium text-ink" : "text-ink-muted hover:bg-cream-dark/60",
              )}
            >
              All categories
            </button>
          </li>
          {CATEGORY_SLUGS.map((slug) => (
            <li key={slug}>
              <button
                type="button"
                onClick={() => onCategory(slug)}
                className={cn(
                  "w-full rounded-xl px-3 py-2 text-left text-sm transition-colors",
                  category === slug
                    ? "bg-cream-dark font-medium text-ink"
                    : "text-ink-muted hover:bg-cream-dark/60",
                )}
              >
                {CATEGORY_LABELS[slug]}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Color story
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {FILTER_COLORS.map((c) => (
            <Chip
              key={c}
              active={colors.includes(c)}
              onClick={() => onToggleColor(c)}
            >
              {c}
            </Chip>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Price
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {PRICE_OPTIONS.map((opt) => (
            <Chip
              key={opt.id}
              active={priceBucket === opt.id}
              onClick={() =>
                onPriceBucket(priceBucket === opt.id ? null : opt.id)
              }
            >
              {opt.label}
            </Chip>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Availability
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {(
            [
              ["all", "All"],
              ["in_stock", "In stock"],
              ["out_of_stock", "Sold out"],
            ] as const
          ).map(([id, label]) => (
            <Chip
              key={id}
              active={availability === id}
              onClick={() => onAvailability(id)}
            >
              {label}
            </Chip>
          ))}
        </div>
      </section>
    </aside>
  );
}
