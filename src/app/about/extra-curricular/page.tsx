import type { Metadata } from "next"
import { PageHero, ContentSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Extra-Curricular",
  description: "Extra-curricular activities at Westwood Boys School.",
}

export default function ExtraCurricularPage() {
  return (
    <>
      <PageHero
        title="Extra-Curricular"
        subtitle="About"
      />

      <ContentSection
        image="/images/extra-curricular-new.png"
        imageAlt="Extra-curricular activities at Westwood Boys School"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">
          Beyond the Classroom
        </h2>
        <p className="text-body text-text-secondary mb-6">
          We believe education extends beyond academic subjects. Our enrichment programme includes a variety of activities designed to develop confidence, teamwork, and leadership skills while pursuing interests and passions.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Weekly Islamic Circle and Quran study</li>
          <li>Sports clubs and inter-school competitions</li>
          <li>Debate and public speaking</li>
          <li>Coding and robotics club</li>
          <li>Art and creative workshops</li>
          <li>Community service projects</li>
          <li>Educational trips and visits</li>
        </ul>
      </ContentSection>
    </>
  )
}
