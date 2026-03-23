import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Download } from "lucide-react"

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
            <p className="text-body text-text-secondary mb-6">
              Please click link to download our term dates. Eid Holidays may change depending on the sighting of the moon.
            </p>

            <a
              href="/documents/term-dates-2025-26.pdf"
              download
              className="inline-flex items-center gap-2 text-brand-navy hover:text-accent-gold transition-colors font-medium"
            >
              <Download className="w-4 h-4" />
              Term Dates – Academic Year 2025/26
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
