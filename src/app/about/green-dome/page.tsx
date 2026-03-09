import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "The Green Dome Academy",
  description: "The Green Dome Academy is a non-profit educational organisation that seeks to serve Oldham's Muslim population.",
}

export default function GreenDomePage() {
  return (
    <>
      <PageHero
        title="The Green Dome Academy"
        subtitle="Our School"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary">
              The Green Dome Academy (TheGDA) is a non-profit educational organisation that seeks to serve Oldham&apos;s Muslim population. The charity is currently running a successful all through 3-19 school called Westwood High.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
