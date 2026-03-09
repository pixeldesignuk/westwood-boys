import { cn } from "@/lib/utils"

interface StatItemProps {
  value: string | number
  label: string
  prefix?: string
  suffix?: string
}

export function StatItem({ value, label, prefix, suffix }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl lg:text-5xl font-semibold mb-2 text-inherit">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="text-body text-text-muted">{label}</div>
    </div>
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
