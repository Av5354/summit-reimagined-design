import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-sm px-5 text-xs font-bold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90",
        outline: "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
        light: "bg-background text-foreground hover:-translate-y-0.5 hover:bg-background/90",
        ghost: "bg-transparent text-foreground hover:bg-secondary",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ asChild, className, variant, size, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});

export { Button, buttonVariants };