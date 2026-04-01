import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LimitedBatchBanner() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-ink py-16 text-cream sm:py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
            Limited finds / Small batch
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Drops don’t stick around. Neither should hesitation.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-cream/75">
            When a run is gone, it’s gone—new color stories land often.
          </p>
        </div>
        <Button
          variant="secondary"
          size="lg"
          className="border-cream/25 bg-cream text-ink hover:bg-white"
          asChild
        >
          <Link href="/shop?filter=limited">Shop limited pieces</Link>
        </Button>
      </div>
    </section>
  );
}
