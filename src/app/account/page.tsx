import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Account",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 sm:px-6 lg:px-10">
      <h1 className="font-display text-3xl font-semibold text-ink">Account</h1>
      <p className="mt-4 text-sm text-ink-muted">
        Sign-in, order history, and saved addresses will live here once you
        connect your auth and commerce backend.
      </p>
      <Button className="mt-8" variant="secondary" asChild>
        <Link href="/shop">Continue shopping</Link>
      </Button>
    </div>
  );
}
