import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "white" | "cream" | "slate" | "navy" | "gradient"
  padding?: "none" | "sm" | "default" | "lg"
  id?: string
}

const backgroundClasses = {
  white: "bg-white",
  cream: "bg-surface-cream",
  slate: "bg-surface-slate",
  navy: "bg-brand-navy text-white",
  gradient: "hero-gradient text-white",
}

const paddingClasses = {
  none: "",
  sm: "py-12 lg:py-16",
  default: "py-16 lg:py-24",
  lg: "py-24 lg:py-32",
}

export function Section({
  children,
  className,
  background = "white",
  padding = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </section>
  )
}

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "full"
}

const sizeClasses = {
  sm: "max-w-4xl",
  default: "max-w-7xl",
  lg: "max-w-[90rem]",
  full: "max-w-full",
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div className={cn(
      "mx-auto px-4 sm:px-6 lg:px-8",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 lg:mb-16",
      centered && "text-center",
      className
    )}>
      {subtitle && (
        <span className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-h2 text-inherit mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-body-lg max-w-2xl",
          centered && "mx-auto",
          "text-text-muted"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
