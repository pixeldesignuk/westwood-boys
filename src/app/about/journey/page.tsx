import type { Metadata } from "next"
import { PageHero, ContentSection } from "@/components/sections"

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

      <ContentSection
        image="/images/our-journey.jpg"
        imageAlt="Our Journey - Westwood Boys School"
        imagePosition="right"
      >
        <p className="text-body-lg text-text-secondary mb-6">
          Westwood Boys School is an Independent Muslim Secondary School located in the heart of Oldham&apos;s Cultural Quarter.
        </p>
        <p className="text-body text-text-secondary mb-6">
          As a relatively small school, teachers will use the low learner-teacher ratio to deliver a student-centred education.
        </p>
        <p className="text-body text-text-secondary">
          We hope that our educational offer will prepare our pupils for the challenges and opportunities of modern Britain.
        </p>
      </ContentSection>
    </>
  )
}
