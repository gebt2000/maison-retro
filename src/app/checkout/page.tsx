import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6 lg:px-10">
      <h1 className="font-display text-3xl font-semibold text-ink">
        Checkout
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        This is a frontend demo. Connect{" "}
        <strong className="font-medium text-ink">Shopify Storefront API</strong>
        , <strong className="font-medium text-ink">Medusa</strong>, or{" "}
        <strong className="font-medium text-ink">Stripe Checkout</strong> plus
        your CMS to process real orders.
      </p>
      <Button className="mt-10" asChild>
        <Link href="/cart">Back to cart</Link>
      </Button>
    </div>
  );
}
