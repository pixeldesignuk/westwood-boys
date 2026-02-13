import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-brand-navy text-white hover:bg-brand-navy-light hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white",
        secondary: "bg-surface-slate text-brand-navy hover:bg-slate-200",
        ghost: "text-brand-navy hover:bg-surface-slate",
        link: "text-brand-navy underline-offset-4 hover:underline",
        cta: "bg-accent-gold text-white hover:bg-accent-gold-light hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-gold/25 active:scale-[0.98] font-semibold",
        glass: "glass border border-white/20 text-brand-navy hover:bg-white/95 backdrop-blur-md",
        "glass-dark": "glass-dark border border-white/10 text-white hover:bg-brand-navy/95 backdrop-blur-md",
      },
      size: {
        default: "h-10 px-5 py-2",
        xs: "h-7 gap-1 rounded-md px-3 text-xs",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "size-10",
        "icon-xs": "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
