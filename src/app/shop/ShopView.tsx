"use client";

import { useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import type { CategorySlug } from "@/lib/categories";
import { CATEGORY_SLUGS } from "@/lib/categories";
import {
  FilterSidebar,
  PRICE_OPTIONS,
  type AvailabilityFilter,
} from "@/components/shop/FilterSidebar";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { SortDropdown, type SortValue } from "@/components/shop/SortDropdown";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function parseColors(s: string | null): string[] {
  if (!s) return [];
  return s.split(",").filter(Boolean);
}

function isCategorySlug(s: string | null): s is CategorySlug {
  return s != null && (CATEGORY_SLUGS as readonly string[]).includes(s);
}

export function ShopView() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);

  const rawCategory = sp.get("category");
  const category = isCategorySlug(rawCategory) ? rawCategory : null;
  const colors = parseColors(sp.get("colors"));
  const priceBucket = sp.get("price");
  const availabilityParam = sp.get("availability");
  const availability: AvailabilityFilter =
    availabilityParam === "in_stock" ||
    availabilityParam === "out_of_stock"
      ? availabilityParam
      : "all";
  const sortParam = sp.get("sort") as SortValue | null;
  const sort: SortValue =
    sortParam &&
    ["featured", "newest", "price-asc", "price-desc"].includes(sortParam)
      ? sortParam
      : "featured";
  const filterParam = sp.get("filter");
  const special =
    filterParam === "new"
      ? "new"
      : filterParam === "bestseller"
        ? "bestseller"
        : filterParam === "limited"
          ? "limited"
          : "none";

  const setParams = useCallback(
    (updates: Record<string, string | null | undefined>) => {
      const params = new URLSearchParams(sp.toString());
      Object.entries(updates).forEach(([k, v]) => {
        if (v == null || v === "") params.delete(k);
        else params.set(k, v);
      });
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      setMobileFilters(false);
    },
    [pathname, router, sp],
  );

  const filtered = useMemo(() => {
    let list: Product[] = [...products];
    if (category) list = list.filter((p) => p.category === category);
    if (colors.length)
      list = list.filter((p) => colors.some((c) => p.colors.includes(c)));
    if (priceBucket === "150-plus") {
      list = list.filter((p) => p.price >= 150);
    } else if (priceBucket) {
      const opt = PRICE_OPTIONS.find((o) => o.id === priceBucket);
      if (opt && opt.id !== "150-plus") {
        list = list.filter(
          (p) => p.price >= opt.min && p.price < opt.max,
        );
      }
    }
    if (availability === "in_stock") list = list.filter((p) => p.inStock);
    if (availability === "out_of_stock") list = list.filter((p) => !p.inStock);
    if (special === "new") list = list.filter((p) => p.isNew);
    if (special === "bestseller") list = list.filter((p) => p.isBestSeller);
    if (special === "limited") list = list.filter((p) => p.limited);

    switch (sort) {
      case "newest":
        list.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        list.sort((a, b) => {
          const as =
            (a.isBestSeller ? 2 : 0) + (a.isNew ? 1 : 0) + (a.limited ? 1 : 0);
          const bs =
            (b.isBestSeller ? 2 : 0) + (b.isNew ? 1 : 0) + (b.limited ? 1 : 0);
          if (bs !== as) return bs - as;
          return a.name.localeCompare(b.name);
        });
    }
    return list;
  }, [category, colors, priceBucket, availability, sort, special]);

  const onCategory = (slug: string | null) => {
    setParams({ category: slug });
  };

  const onToggleColor = (c: string) => {
    const next = colors.includes(c)
      ? colors.filter((x) => x !== c)
      : [...colors, c];
    setParams({ colors: next.length ? next.join(",") : null });
  };

  const onClear = () => {
    router.push(pathname, { scroll: false });
    setMobileFilters(false);
  };

  return (
    <div className="mx-auto max-w-[1600px] px-[var(--section-pad-x)] py-12 lg:flex lg:gap-14 lg:py-[var(--section-pad-y)]">
      <div className="mb-8 flex items-center justify-between lg:hidden">
        <p className="text-sm text-ink-muted">
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
        </p>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => setMobileFilters((v) => !v)}
        >
          <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
          Filters
        </Button>
      </div>

      <div
        className={cn(
          "lg:block",
          mobileFilters ? "block" : "hidden",
        )}
      >
        <div className="lg:sticky lg:top-36 lg:w-64 lg:shrink-0">
          <FilterSidebar
            category={category}
            colors={colors}
            priceBucket={priceBucket}
            availability={availability}
            special={special}
            onCategory={onCategory}
            onToggleColor={onToggleColor}
            onPriceBucket={(b) => setParams({ price: b })}
            onAvailability={(a) =>
              setParams({ availability: a === "all" ? null : a })
            }
            onSpecial={(s) =>
              setParams({
                filter:
                  s === "none"
                    ? null
                    : s === "new"
                      ? "new"
                      : s === "bestseller"
                        ? "bestseller"
                        : "limited",
              })
            }
            onClear={onClear}
          />
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-muted">
              Collection
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
              The{" "}
              <span className="italic text-tangerine">shop.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              Collectible decor, curated, colorful, and anything but basic.
            </p>
          </div>
          <SortDropdown
            value={sort}
            onChange={(v) =>
              setParams({ sort: v === "featured" ? null : v })
            }
          />
        </div>
        <p className="mb-8 hidden text-sm text-ink-muted lg:block">
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
        </p>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
