import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Prayer",
  description: "Prayer facilities at Westwood Boys School.",
}

export default function PrayerPage() {
  return (
    <>
      <PageHero
        title="Prayer"
        subtitle="About"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary">
              We have a spacious assembly hall which is used during break and lunch times. This space will also be used for quiet reflection and prayer.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
