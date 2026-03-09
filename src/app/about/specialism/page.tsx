import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Specialism",
  description: "We are a Muslim faith school seeking to deliver a programme of learning that will nurture deep-rooted Islamic values.",
}

export default function SpecialismPage() {
  return (
    <>
      <PageHero
        title="Specialism"
        subtitle="About"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-4">
              We are a Muslim faith school seeking to deliver a programme of learning that will nurture deep-rooted Islamic values.
            </p>

            <p className="text-body text-text-secondary mb-4">
              In the Islamic Studies lessons, learners will appreciate the basic tenets of their faith and learn how to apply its teachings in a modern multi-faith context.
            </p>

            <p className="text-body text-text-secondary mb-4">
              The Holy Qur&apos;an plays a central role in Muslim worship. Qur&apos;anic Studies will empower learners with the skills to recite the Holy Qur&apos;an correctly.
            </p>

            <p className="text-body text-text-secondary mb-4">
              Our Hadith Studies programme seeks to help learners develop Prophetic character and deepen their love for the Beloved Prophet Muhammad (S).
            </p>

            <p className="text-body text-text-secondary mb-4">
              Arabic language lessons will enable learners to understand the meanings of the Qur&apos;an. These sessions will also enable learners to be well acquainted with a much sought after language.
            </p>

            <p className="text-body text-text-secondary">
              With a comprehensive PSHCE programme, learners will develop universal values of respect, tolerance and an appreciation of Fundamental British Values.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
