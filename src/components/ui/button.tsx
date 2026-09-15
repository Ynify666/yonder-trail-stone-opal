import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-tight transition-[transform,background-color,box-shadow,color] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg shadow-[0_8px_24px_-10px_rgba(196,92,106,0.7)] hover:brightness-[1.04]",
        ghost:
          "bg-transparent text-fg hover:bg-surface-2",
        paper:
          "bg-surface text-fg shadow-[0_1px_0_rgba(58,42,36,0.06),0_10px_28px_-16px_rgba(58,42,36,0.35)] hover:shadow-[0_1px_0_rgba(58,42,36,0.08),0_14px_32px_-14px_rgba(58,42,36,0.4)]",
        yes: "bg-primary text-primary-fg shadow-[0_10px_28px_-10px_rgba(196,92,106,0.75)] hover:brightness-[1.05]",
        no: "bg-surface-2 text-muted",
      },
      size: {
        md: "h-12 min-h-12 px-6 text-base rounded-full",
        lg: "h-14 min-h-14 px-8 text-lg rounded-full",
        sm: "h-11 min-h-11 px-5 text-sm rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
