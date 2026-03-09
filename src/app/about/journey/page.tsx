import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Our Journey",
  description: "Westwood Boys School is an Independent Muslim Secondary School located in the heart of Oldham's Cultural Quarter.",
}

export default function JourneyPage() {
  return (
    <>
      <PageHero
        title="Our Journey"
        subtitle="About"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-4">
              Westwood Boys School is an Independent Muslim Secondary School located in the heart of Oldham&apos;s Cultural Quarter.
            </p>

            <p className="text-body text-text-secondary mb-4">
              As a relatively small school, teachers will use the low learner-teacher ratio to deliver a student-centred education.
            </p>

            <p className="text-body text-text-secondary">
              We hope that our educational offer will prepare our pupils for the challenges and opportunities of modern Britain.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
