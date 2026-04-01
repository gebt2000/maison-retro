"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Note: metadata export must be in server file; split if needed
export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Contact
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        We’re here to help
      </h1>
      <p className="mt-4 text-base text-ink-muted">
        Questions about an order, a piece, or a collaboration? Send a note—we
        read everything.
      </p>

      <div className="mt-10 rounded-2xl border border-[var(--border-soft)] bg-surface p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-ink">
          Customer care
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-muted">
          <li>
            Email:{" "}
            <a
              className="font-medium text-ink underline-offset-4 hover:underline"
              href="mailto:hello@maisonretro.shop"
            >
              hello@maisonretro.shop
            </a>
          </li>
          <li>Hours: Mon–Fri, 9am–5pm ET</li>
          <li>Typical reply within one business day</li>
        </ul>
      </div>

      <form
        className="mt-12 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-surface px-4 py-3 text-sm outline-none focus:border-tangerine/40 focus:ring-2 focus:ring-tangerine/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-surface px-4 py-3 text-sm outline-none focus:border-tangerine/40 focus:ring-2 focus:ring-tangerine/20"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-none rounded-2xl border border-[var(--border-soft)] bg-surface px-4 py-3 text-sm outline-none focus:border-tangerine/40 focus:ring-2 focus:ring-tangerine/20"
          />
        </div>
        <Button type="submit" size="lg">
          {sent ? "Sent" : "Send message"}
        </Button>
        {sent && (
          <p className="text-sm text-ink-muted">
            Thanks—this demo doesn’t send email yet. Wire your API or form
            handler when you launch.
          </p>
        )}
      </form>

      <div className="mt-16 rounded-2xl bg-cream-dark/50 p-6">
        <h2 className="font-display text-lg font-semibold text-ink">FAQ</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Shipping, returns, and product care—full FAQ coming soon. For now,
          reach out and we’ll answer fast.
        </p>
        <Link
          href="/shop"
          className="mt-4 inline-block text-sm font-medium text-tangerine underline-offset-4 hover:underline"
        >
          Back to shop →
        </Link>
      </div>
    </div>
  );
}
