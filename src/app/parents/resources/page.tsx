import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Resources",
  description: "Parent resources at Westwood Boys School.",
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Parents"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-4">
              Please click the link to view our school prospectus:
            </p>
            <a
              href="https://prezi.com/p/vhgamfber7jx/westwood-boys-school-prospectus-2025/?present=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy hover:text-accent-gold transition-colors font-medium"
            >
              Westwood Boys School Prospectus 2025
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
