import Image from "next/image"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  photo?: string
  variant?: "default" | "glass" | "feature"
  className?: string
}

const variantClasses = {
  default: "bg-white border border-slate-200",
  glass: "glass border border-white/20",
  feature: "bg-brand-navy text-white",
}

export function TestimonialCard({
  quote,
  author,
  role,
  photo,
  variant = "default",
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 lg:p-8 relative",
        variantClasses[variant],
        className
      )}
    >
      <Quote
        className={cn(
          "w-10 h-10 mb-4",
          variant === "feature" ? "text-white/20" : "text-accent-gold/30"
        )}
      />
      <blockquote className={cn(
        "text-body-lg font-serif italic mb-6 leading-relaxed",
        variant === "feature" ? "text-white" : "text-text-primary"
      )}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        {photo && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={photo}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <div className={cn(
            "font-semibold",
            variant === "feature" ? "text-white" : "text-brand-navy"
          )}>
            {author}
          </div>
          {role && (
            <div className={cn(
              "text-sm",
              variant === "feature" ? "text-white/70" : "text-text-muted"
            )}>
              {role}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
