import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Our Mission",
  description: "To deliver a world class education in an environment that nurtures the love for Allah.",
}

export default function MissionPage() {
  return (
    <>
      <PageHero
        title="Our Mission"
        subtitle="Our School"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-h3 text-brand-navy leading-relaxed mb-12">
              &ldquo;To deliver a world class education in an environment that nurtures the love for Allah; where both staff and students enjoy the best possible learning experience and actively promote the highest of moral and spiritual values.&rdquo;
            </blockquote>

            <h2 className="font-serif text-h3 text-brand-navy mb-6">Our School Motto</h2>
            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
              <span className="text-text-muted text-3xl sm:text-4xl font-light">Outstanding</span>
              <span className="text-brand-navy text-3xl sm:text-4xl font-bold">World Class</span>
              <span className="text-text-muted text-3xl sm:text-4xl font-light">Education</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 mt-1">
              <span className="text-brand-navy text-3xl sm:text-4xl font-bold">Behaviour</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 mt-1">
              <span className="text-brand-navy text-3xl sm:text-4xl font-bold">Spiritual</span>
              <span className="text-text-muted text-3xl sm:text-4xl font-light">Values</span>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
