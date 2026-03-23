import type { Metadata } from "next"
import { PageHero, ContentSection } from "@/components/sections"

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

      <ContentSection
        image="/images/sport-recreation.png"
        imageAlt="Sport and Recreation at Westwood Boys School"
        imagePosition="right"
      >
        <p className="text-body text-text-secondary">
          Learners will make use of local Sports Centres for their Physical Education. This will allow them to make use of the best facilities in the borough.
        </p>
      </ContentSection>
    </>
  )
}
