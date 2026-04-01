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
    "h-12 w-auto max-w-[min(72vw,300px)] sm:h-14 sm:max-w-[320px] md:h-16 md:max-w-[360px] lg:h-[4.5rem] lg:max-w-[400px]",
  footer:
    "h-14 w-auto max-w-[280px] sm:h-16 sm:max-w-[340px] lg:h-[4.75rem] lg:max-w-[420px]",
  drawer: "h-10 w-auto max-w-[200px] sm:h-11 sm:max-w-[220px]",
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
      sizes="(max-width: 640px) 72vw, (max-width: 1024px) 320px, 400px"
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
      aria-label="Maison Retro home"
    >
      <BrandLogo variant={variant} priority={priority} />
    </Link>
  );
}
