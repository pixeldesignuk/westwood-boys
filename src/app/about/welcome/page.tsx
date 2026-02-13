import type { Metadata } from "next"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { StatsGrid } from "@/components/ui/stats"

export const metadata: Metadata = {
  title: "Welcome",
  description:
    "Welcome to Westwood Boys School. Learn about our community, our values, and our commitment to nurturing tomorrow's leaders through academic excellence and Islamic values.",
}

const stats = [
  { value: 200, suffix: "+", label: "Students" },
  { value: 15, label: "Average Class Size" },
  { value: 95, suffix: "%", label: "GCSE Pass Rate" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
]

export default function WelcomePage() {
  return (
    <>
      <PageHero
        title="Welcome to Westwood Boys School"
        subtitle="About Us"
        description="Where faith meets excellence. An independent Muslim secondary school nurturing tomorrow's leaders."
      />

      <ContentSection
        image="/images/school-building.jpg"
        imageAlt="Westwood Boys School building"
        imagePosition="right"
      >
        <p className="text-body-lg text-text-secondary mb-6">
          Welcome to Westwood Boys School, an independent Muslim secondary school
          dedicated to nurturing young men who will make a positive impact on the world.
        </p>
        <p className="text-body text-text-secondary mb-6">
          Our school combines rigorous academic standards with Islamic values, creating
          an environment where students can excel both intellectually and spiritually.
          We believe that education is about more than just grades – it&apos;s about
          developing character, building confidence, and preparing young people to
          become responsible citizens and leaders.
        </p>
        <p className="text-body text-text-secondary">
          With small class sizes, dedicated teachers, and a supportive community,
          we provide the personalized attention that every student deserves. Our
          curriculum is designed to challenge and inspire, while our pastoral care
          ensures that every student feels valued and supported.
        </p>
      </ContentSection>

      <Section background="slate" padding="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Our School at a Glance
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence in education.
            </p>
          </div>
          <StatsGrid stats={stats} variant="card" />
        </Container>
      </Section>

      <ContentSection
        title="Our Vision"
        image="/images/students-learning.jpg"
        imageAlt="Students engaged in learning"
        imagePosition="left"
        background="white"
      >
        <p className="text-body text-text-secondary mb-6">
          We envision a world where young Muslim men are at the forefront of positive
          change – in their families, communities, and the wider society. Our motto,
          &ldquo;Change The World,&rdquo; reflects this aspiration.
        </p>
        <p className="text-body text-text-secondary mb-6">
          To achieve this vision, we provide an education that:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Develops academic excellence and critical thinking</li>
          <li>Nurtures strong Islamic identity and values</li>
          <li>Builds leadership skills and confidence</li>
          <li>Promotes physical wellbeing and healthy lifestyles</li>
          <li>Encourages service to community and society</li>
        </ul>
      </ContentSection>

      <CTASection />
    </>
  )
}
