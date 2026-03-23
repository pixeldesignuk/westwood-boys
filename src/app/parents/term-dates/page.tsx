import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Term Dates",
  description: "Academic term dates for Westwood Boys School.",
}

export default function TermDatesPage() {
  return (
    <>
      <PageHero
        title="Term Dates"
        subtitle="Parents"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary">
              Please click link to download our term dates. Eid Holidays may change depending on the sighting of the moon.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
