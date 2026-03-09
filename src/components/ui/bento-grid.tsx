import * as React from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6",
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  size?: "default" | "large" | "wide" | "tall"
  variant?: "default" | "glass" | "feature" | "accent"
  href?: string
}

const sizeClasses = {
  default: "",
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
}

const variantClasses = {
  default: "bg-white border border-slate-200 hover:border-brand-navy/20 hover:shadow-xl",
  glass: "glass border border-white/20",
  feature: "bg-brand-navy text-white",
  accent: "bg-accent-gold text-white",
}

export function BentoCard({
  title,
  description,
  icon,
  className,
  children,
  size = "default",
  variant = "default",
  href,
}: BentoCardProps) {
  const Wrapper = href ? "a" : "div"
  const wrapperProps = href ? { href } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group relative rounded-3xl p-6 lg:p-8 transition-all duration-300",
        "cursor-pointer",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {icon && (
        <div className={cn(
          "mb-4 inline-flex items-center justify-center rounded-xl p-3",
          variant === "default" ? "bg-brand-navy/5 text-brand-navy" : "bg-white/10 text-current"
        )}>
          {icon}
        </div>
      )}
      <h3 className={cn(
        "font-serif text-xl lg:text-2xl font-semibold mb-2",
        variant === "default" ? "text-brand-navy" : "text-current"
      )}>
        {title}
      </h3>
      {description && (
        <p className={cn(
          "text-body leading-relaxed",
          variant === "default" ? "text-text-secondary" : "text-white/80"
        )}>
          {description}
        </p>
      )}
      {children}

      {/* Decorative corner accent */}
      <div className={cn(
        "absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        variant === "default" ? "text-brand-navy/10" : "text-white/20"
      )}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Wrapper>
  )
}
