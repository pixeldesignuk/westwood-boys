import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Teaching & Learning",
  description:
    "Our setting aims to create an environment that is conducive to learning at Westwood Boys School.",
}

export default function TeachingLearningPage() {
  return (
    <>
      <PageHero
        title="Teaching & Learning"
        subtitle="Academics"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary">
              Our setting aims to create an environment that is conducive to learning. Our learning spaces, dedicated ICT room and Science Laboratory will allow learners to access a broad and balanced curriculum. The premises benefits from security features such as CCTV, external floodlighting and door access control systems. Our modest yard is used by learners to relax during breaks.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
