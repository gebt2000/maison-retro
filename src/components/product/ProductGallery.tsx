"use client";

import Image from "next/image";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: Props) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-cream-dark shadow-[var(--shadow-card)]">
        <Image
          src={images[active]}
          alt={productName}
          fill
          priority
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
        />
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-surface/95 text-ink shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
          aria-label="Zoom image"
        >
          <ZoomIn className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-colors",
                i === active
                  ? "border-ink"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}

      <Dialog.Root open={lightbox} onOpenChange={setLightbox}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[95] bg-ink/85 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[96] max-h-[90vh] w-[min(100vw-2rem,900px)] -translate-x-1/2 -translate-y-1/2 outline-none">
            <Dialog.Title className="sr-only">{productName} — enlarged</Dialog.Title>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cream-dark">
              <Image
                src={images[active]}
                alt={productName}
                fill
                className="object-contain"
                sizes="900px"
              />
            </div>
            <Dialog.Close
              className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink sm:right-0 sm:top-0 sm:bg-transparent sm:text-cream"
              aria-label="Close"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
