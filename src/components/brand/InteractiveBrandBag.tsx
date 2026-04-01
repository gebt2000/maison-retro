"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/store-context";
import { cn } from "@/lib/utils";

const BAG = "/brand/maison-retro-bag.png";

type Placement = "floating" | "hero";

function BrandBagButton({
  placement,
  reduceMotion,
}: {
  placement: Placement;
  reduceMotion: boolean | null;
}) {
  const { setCartOpen, cartCount } = useStore();
  const ref = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduceMotion) return;
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ rx: y * -13, ry: x * 15 });
    },
    [reduceMotion],
  );

  const onLeave = useCallback(() => setTilt({ rx: 0, ry: 0 }), []);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => setCartOpen(true)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={reduceMotion ? undefined : { scale: 0.93 }}
      className={cn(
        "group relative touch-manipulation outline-none",
        placement === "floating" &&
          "drop-shadow-[0_14px_34px_rgba(28,26,23,0.2)]",
      )}
      aria-label={
        cartCount > 0
          ? `Open your bag, ${cartCount} items`
          : "Open your shopping bag"
      }
    >
      <div
        className={cn(
          "will-change-transform",
          !reduceMotion &&
            "group-hover:animate-bag-marquee-glow group-focus-visible:animate-bag-marquee-glow",
        )}
        style={{
          transform: `perspective(760px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={BAG}
          alt=""
          width={480}
          height={600}
          draggable={false}
          className={cn(
            "pointer-events-none h-auto select-none",
            placement === "floating" && "w-[5.25rem] sm:w-[7rem]",
            placement === "hero" && "w-[7rem] sm:w-[9.5rem] md:w-[10.5rem]",
          )}
          sizes="(max-width:640px) 112px, 168px"
        />
      </div>
      {cartCount > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#e91e8c] px-1.5 text-[11px] font-bold text-white shadow-md ring-2 ring-cream">
          {cartCount > 9 ? "9+" : cartCount}
        </span>
      )}
      {placement === "floating" && (
        <span
          className="pointer-events-none absolute -bottom-8 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cream opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
          aria-hidden
        >
          Open bag
        </span>
      )}
      {placement === "hero" && (
        <span
          className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-cream opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:text-[10px]"
          aria-hidden
        >
          Peek inside
        </span>
      )}
    </motion.button>
  );
}

export function InteractiveBrandBag({ placement }: { placement: Placement }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isPdp = pathname.startsWith("/product/");

  if (placement === "hero") {
    return <BrandBagButton placement="hero" reduceMotion={reduceMotion} />;
  }

  return (
    <motion.div
      className={cn(
        "fixed right-3 z-[35] sm:right-6",
        isPdp ? "bottom-[5.25rem] sm:bottom-10" : "bottom-5 sm:bottom-10",
      )}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -12, 0],
              rotate: [0, 1.5, 0, -1.2, 0],
            }
      }
      transition={{
        duration: 5.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <BrandBagButton placement="floating" reduceMotion={reduceMotion} />
    </motion.div>
  );
}

/** Fixed floating bag: opens cart; tilt + marquee glow on hover. */
export function FloatingBrandBag() {
  return <InteractiveBrandBag placement="floating" />;
}
