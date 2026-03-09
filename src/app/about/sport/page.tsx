import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Sport & Recreation",
  description: "Physical education and sport at Westwood Boys School.",
}

export default function SportPage() {
  return (
    <>
      <PageHero
        title="Sport & Recreation"
        subtitle="About"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary">
              Learners will make use of local Sports Centres for their Physical Education. This will allow them to make use of the best facilities in the borough.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
