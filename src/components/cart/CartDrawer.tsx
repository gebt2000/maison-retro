"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useStore } from "@/context/store-context";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const reduceMotion = useReducedMotion();
  const {
    cartOpen,
    setCartOpen,
    cart,
    setLineQty,
    removeLine,
    cartSubtotal,
  } = useStore();

  return (
    <Dialog.Root open={cartOpen} onOpenChange={setCartOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/35 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed bottom-0 right-0 top-0 z-[81] flex w-full max-w-md flex-col bg-surface shadow-[var(--shadow-lift)] outline-none sm:max-w-lg">
          <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-5 py-4">
            <Dialog.Title className="font-display text-xl font-semibold text-ink">
              Your bag
            </Dialog.Title>
            <Dialog.Close
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </Dialog.Close>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            {cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
                <motion.div
                  className="relative w-[min(72%,200px)] drop-shadow-[0_12px_28px_rgba(28,26,23,0.12)]"
                  animate={
                    reduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, 0.8, 0] }
                  }
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/brand/maison-retro-bag.png"
                    alt=""
                    width={400}
                    height={500}
                    className="h-auto w-full object-contain"
                  />
                </motion.div>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">
                    Room for something wonderful
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Fill our signature bag with color, charm, and limited finds.
                  </p>
                </div>
                <Button asChild variant="primary">
                  <Link href="/shop" onClick={() => setCartOpen(false)}>
                    Continue shopping
                  </Link>
                </Button>
              </div>
            ) : (
              <ul className="flex-1 overflow-y-auto px-5 py-4">
                {cart.map((line) => (
                  <li
                    key={line.slug}
                    className="flex gap-4 border-b border-[var(--border-soft)] py-5 first:pt-0"
                  >
                    <Link
                      href={`/product/${line.slug}`}
                      onClick={() => setCartOpen(false)}
                      className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-cream-dark"
                    >
                      <Image
                        src={line.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <Link
                        href={`/product/${line.slug}`}
                        onClick={() => setCartOpen(false)}
                        className="font-medium text-ink hover:underline"
                      >
                        {line.name}
                      </Link>
                      <p className="mt-1 text-sm text-ink-muted">
                        {formatPrice(line.price)}
                      </p>
                      <div className="mt-auto flex items-center gap-2 pt-3">
                        <div className="flex items-center rounded-full border border-[var(--border-soft)] bg-cream/80">
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-ink/5"
                            aria-label="Decrease quantity"
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
                            className="flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-ink/5"
                            aria-label="Increase quantity"
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
                          className="text-xs font-medium text-ink-muted underline-offset-4 hover:text-cherry hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-[var(--border-soft)] bg-cream/50 px-5 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Subtotal</span>
                <span className="font-display text-lg font-semibold text-ink">
                  {formatPrice(cartSubtotal)}
                </span>
              </div>
              <p className="mt-2 text-xs text-ink-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <Button
                className="mt-5 w-full"
                size="lg"
                variant="primary"
                asChild
              >
                <Link href="/checkout" onClick={() => setCartOpen(false)}>
                  Checkout
                </Link>
              </Button>
              <Button className="mt-2 w-full" variant="ghost" asChild>
                <Link href="/cart" onClick={() => setCartOpen(false)}>
                  View full cart
                </Link>
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
