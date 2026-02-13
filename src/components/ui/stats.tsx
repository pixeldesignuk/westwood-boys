"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatItemProps {
  value: string | number
  label: string
  prefix?: string
  suffix?: string
}

export function StatItem({ value, label, prefix, suffix }: StatItemProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    if (isInView && typeof value === "number") {
      const duration = 2000
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
        setDisplayValue(Math.floor(eased * value))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      animate()
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="font-serif text-4xl lg:text-5xl font-semibold mb-2 text-inherit">
        {prefix}
        {typeof value === "number" ? displayValue : value}
        {suffix}
      </div>
      <div className="text-body text-text-muted">{label}</div>
    </motion.div>
  )
}

interface StatsGridProps {
  stats: StatItemProps[]
  className?: string
  variant?: "default" | "card"
}

export function StatsGrid({ stats, className, variant = "default" }: StatsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12",
        variant === "card" && "bg-white rounded-3xl p-8 lg:p-12 shadow-lg",
        className
      )}
    >
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  )
}
