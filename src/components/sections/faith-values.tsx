import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

const values = [
  "Daily prayers integrated into school life",
  "Islamic Studies as a core subject",
  "Character education rooted in Islamic principles",
  "Emphasis on service to community",
  "Respect for all faiths and backgrounds",
  "British Values embedded in curriculum",
]

export function FaithValuesSection() {
  return (
    <Section background="navy" padding="lg" className="relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="faith-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#faith-pattern)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-4">
              Faith & Values
            </span>
            <h2 className="font-serif text-h2 text-white mb-6">
              Building Character Through Faith
            </h2>
            <p className="text-body-lg text-white/80 mb-8">
              &ldquo;To deliver a world class education in an environment that nurtures the
              love for Allah; where both staff and students enjoy the best possible learning
              experience and actively promote the highest of moral and spiritual values.&rdquo;
            </p>

            <ul className="space-y-4 mb-8">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3 text-white/90"
                >
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link href="/about/mission" className="group">
                  Our Mission
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass-dark" size="lg" asChild>
                <Link href="/academics/green-dome">
                  Green Dome Academy
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/prayer.jpg"
                alt="Students in prayer"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-gold/20 rounded-3xl -z-10" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
