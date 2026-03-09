import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

export function PrincipalsWelcomeSection() {
  return (
    <Section background="white" padding="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/principal.jpg"
                alt="School Principal"
                fill
                className="object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-navy/5 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-4">
              Welcome Message
            </span>
            <h2 className="font-serif text-h2 text-brand-navy mb-6">
              A Message from Our Principal
            </h2>

            <div className="relative mb-6">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent-gold/20" />
              <blockquote className="text-body-lg text-text-secondary italic pl-8">
                At Westwood Boys School, we believe every young man has the potential
                to change the world. Our mission is to nurture that potential through
                a unique blend of academic excellence, Islamic values, and character
                development.
              </blockquote>
            </div>

            <p className="text-body text-text-secondary mb-6">
              We provide a supportive, inclusive environment where students are
              challenged to achieve their best while developing the moral compass
              and leadership skills they need to make a positive impact on society.
            </p>

            <p className="text-body text-text-secondary mb-8">
              I invite you to discover what makes our school community special and
              how we can partner with you in your son&apos;s educational journey.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div>
                <div className="font-serif font-semibold text-brand-navy text-lg">
                  Muhammad Ahmed
                </div>
                <div className="text-text-muted text-sm">Principal</div>
              </div>
            </div>

            <Button variant="default" size="lg" asChild>
              <Link href="/about/welcome" className="group">
                Read Full Welcome
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
