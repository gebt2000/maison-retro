import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO = "/brand/maison-retro-logo.png";

type BrandLogoProps = {
  /** Header nav */
  variant?: "header" | "footer" | "drawer";
  className?: string;
  priority?: boolean;
};

const variantClass: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  header:
    "h-9 w-auto max-w-[min(52vw,200px)] sm:h-10 sm:max-w-[220px] md:h-[2.65rem] md:max-w-[240px]",
  footer: "h-12 w-auto max-w-[220px] sm:h-14 sm:max-w-[260px]",
  drawer: "h-8 w-auto max-w-[160px]",
};

export function BrandLogo({
  variant = "header",
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={LOGO}
      alt="Maison Retro"
      width={480}
      height={160}
      priority={priority}
      className={cn(
        "object-contain object-left drop-shadow-[0_2px_10px_rgba(28,26,23,0.12)]",
        variantClass[variant],
        className,
      )}
      sizes="(max-width: 640px) 52vw, 240px"
    />
  );
}

export function BrandLogoLink({
  variant = "header",
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center rounded-lg ring-black/5 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine",
        className,
      )}
      aria-label="Maison Retro — Home"
    >
      <BrandLogo variant={variant} priority={priority} />
    </Link>
  );
}
