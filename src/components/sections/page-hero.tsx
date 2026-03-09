import { Container } from "@/components/ui/section"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
}

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative hero-gradient overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <span className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="font-serif text-h1 lg:text-display text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-body-lg text-white/80 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
