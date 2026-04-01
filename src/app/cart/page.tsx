"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useStore } from "@/context/store-context";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, setLineQty, removeLine, cartSubtotal } = useStore();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
        Your cart
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        Review pieces before checkout.
      </p>

      {cart.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-[var(--border-soft)] bg-surface/80 py-16 text-center">
          <p className="text-ink-muted">Your cart is empty.</p>
          <Button className="mt-6" asChild>
            <Link href="/shop">Continue shopping</Link>
          </Button>
        </div>
      ) : (
        <>
          <ul className="mt-10 divide-y divide-[var(--border-soft)] border-y border-[var(--border-soft)]">
            {cart.map((line) => (
              <li key={line.slug} className="flex gap-4 py-8">
                <Link
                  href={`/product/${line.slug}`}
                  className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-cream-dark"
                >
                  <Image
                    src={line.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Link
                    href={`/product/${line.slug}`}
                    className="font-medium text-ink hover:underline"
                  >
                    {line.name}
                  </Link>
                  <p className="text-sm text-ink-muted">
                    {formatPrice(line.price)} each
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-4">
                    <div className="flex items-center rounded-full border border-[var(--border-soft)]">
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-cream-dark"
                        aria-label="Decrease"
                        onClick={() =>
                          setLineQty(line.slug, line.quantity - 1)
                        }
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-[1.5rem] text-center text-sm tabular-nums">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-cream-dark"
                        aria-label="Increase"
                        onClick={() =>
                          setLineQty(line.slug, line.quantity + 1)
                        }
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.slug)}
                      className="text-xs text-ink-muted underline-offset-4 hover:text-cherry hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="shrink-0 font-medium tabular-nums text-ink">
                  {formatPrice(line.price * line.quantity)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button variant="ghost" asChild>
              <Link href="/shop">Continue shopping</Link>
            </Button>
            <div className="text-right">
              <p className="text-sm text-ink-muted">Subtotal</p>
              <p className="font-display text-2xl font-semibold tabular-nums text-ink">
                {formatPrice(cartSubtotal)}
              </p>
            </div>
          </div>
          <Button className="mt-8 w-full sm:ml-auto sm:w-auto" size="lg" asChild>
            <Link href="/checkout">Checkout</Link>
          </Button>
        </>
      )}
    </div>
  );
}
