import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
        This page drifted away
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        Let’s get you back to pieces with personality.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Link
        href="/shop"
        className="mt-4 text-sm font-medium text-tangerine underline-offset-4 hover:underline"
      >
        Shop collection
      </Link>
    </div>
  );
}
