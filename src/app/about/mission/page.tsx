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
            <blockquote className="font-serif text-h3 text-brand-navy leading-relaxed">
              &ldquo;To deliver a world class education in an environment that nurtures the love for Allah; where both staff and students enjoy the best possible learning experience and actively promote the highest of moral and spiritual values.&rdquo;
            </blockquote>
          </div>
        </Container>
      </Section>
    </>
  )
}
