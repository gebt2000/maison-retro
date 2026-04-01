import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-cream shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0",
        secondary:
          "bg-cream-dark text-ink border border-[var(--border-soft)] hover:border-ink/15 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]",
        ghost:
          "bg-transparent text-ink hover:bg-ink/5",
        cherry:
          "bg-cherry text-white hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0",
        outline:
          "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-cream",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 rounded-full px-5 text-xs",
        lg: "h-14 rounded-full px-10 text-base",
        icon: "h-11 w-11 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
