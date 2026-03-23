import type { Metadata } from "next"
import {
  HeroSection,
  // ValuePropositionSection,
  // PrincipalsWelcomeSection,
  // AcademicExcellenceSection,
  // FaithValuesSection,
  // TestimonialsSection,
  // NewsEventsSection,
  // CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Westwood Boys School | Independent Muslim Secondary School in Oldham",
  description:
    "Pupils are proud to attend Westwood Boys School. An independent Muslim secondary school in Oldham.",
  openGraph: {
    title: "Westwood Boys School | Independent Muslim Secondary School in Oldham",
    description:
      "Pupils are proud to attend Westwood Boys School. An independent Muslim secondary school in Oldham.",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ValuePropositionSection /> */}
      {/* <PrincipalsWelcomeSection /> */}
      {/* <AcademicExcellenceSection /> */}
      {/* <FaithValuesSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <NewsEventsSection /> */}
      {/* <CTASection /> */}
    </>
  )
}
