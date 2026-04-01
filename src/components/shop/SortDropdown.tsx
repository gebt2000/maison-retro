"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SortValue =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc";

type Props = {
  value: SortValue;
  onChange: (v: SortValue) => void;
};

const OPTIONS: { value: SortValue; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export function SortDropdown({ value, onChange }: Props) {
  return (
    <Select.Root value={value} onValueChange={(v) => onChange(v as SortValue)}>
      <Select.Trigger
        className={cn(
          "inline-flex h-12 min-w-[200px] items-center justify-between gap-2 rounded-full border border-[var(--border-soft)] bg-surface px-5 text-sm font-medium text-ink",
          "transition-shadow hover:shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine/40",
        )}
        aria-label="Sort products"
      >
        <Select.Value />
        <Select.Icon>
          <ChevronDown className="h-4 w-4 opacity-60" strokeWidth={1.5} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="z-[100] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-surface shadow-[var(--shadow-lift)]"
          position="popper"
          sideOffset={6}
        >
          <Select.Viewport className="p-1">
            {OPTIONS.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className="cursor-pointer select-none rounded-xl px-3 py-2.5 text-sm text-ink outline-none data-[state=checked]:font-semibold data-[highlighted]:bg-cream-dark"
              >
                <Select.ItemText>{opt.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
