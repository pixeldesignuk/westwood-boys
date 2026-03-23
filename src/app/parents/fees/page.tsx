import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Fees",
  description: "Tuition fee information for Westwood Boys School.",
}

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees"
        subtitle="Parents"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary">
              Please contact the school office for the latest tuition fee structure.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
