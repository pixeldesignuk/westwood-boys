import type { Metadata } from "next"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Our Journey",
  description:
    "Explore the history of Westwood Boys School, from our founding to becoming a leading independent Muslim secondary school.",
}

const milestones = [
  {
    year: "2010",
    title: "School Founded",
    description:
      "Westwood Boys School was established with a vision to provide excellent Islamic education.",
  },
  {
    year: "2012",
    title: "First GCSE Results",
    description:
      "Our inaugural cohort achieved outstanding GCSE results, setting the standard for years to come.",
  },
  {
    year: "2015",
    title: "Facility Expansion",
    description:
      "New science laboratories and sports facilities opened, enhancing our educational offering.",
  },
  {
    year: "2018",
    title: "Outstanding Rating",
    description:
      "Received Outstanding rating from Ofsted, recognizing our commitment to excellence.",
  },
  {
    year: "2020",
    title: "Green Dome Academy Launch",
    description:
      "Launched our integrated Islamic studies program, the Green Dome Academy.",
  },
  {
    year: "2023",
    title: "Record Results",
    description:
      "Achieved our best-ever GCSE results with 95% of students achieving grade 4 or above.",
  },
]

export default function JourneyPage() {
  return (
    <>
      <PageHero
        title="Our Journey"
        subtitle="About Us"
        description="From humble beginnings to a leading independent school, discover the story of Westwood Boys School."
      />

      <ContentSection
        image="/images/history.jpg"
        imageAlt="Historical photo of the school"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">Our Story</h2>
        <p className="text-body-lg text-text-secondary mb-6">
          Westwood Boys School was founded in 2010 by a group of parents and educators
          who shared a vision: to create a school where Muslim boys could receive an
          outstanding education rooted in Islamic values.
        </p>
        <p className="text-body text-text-secondary mb-6">
          Starting with just 30 students in Year 7, our school has grown steadily over
          the years, expanding both in numbers and in the breadth of our educational
          offering. Today, we serve over 200 students across Years 7-11, with a
          dedicated team of teachers and staff.
        </p>
        <p className="text-body text-text-secondary">
          Throughout our journey, we have remained true to our founding mission:
          providing an education that nurtures academic excellence, Islamic values,
          and strong character. Our motto, &ldquo;Change The World,&rdquo; continues
          to inspire everything we do.
        </p>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">Key Milestones</h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Significant moments in our school&apos;s history.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-navy/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-gold rounded-full transform -translate-x-1/2 mt-2" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span className="inline-block text-accent-gold font-semibold text-lg mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-brand-navy mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-text-secondary">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ContentSection
        title="Looking Forward"
        background="white"
      >
        <p className="text-body text-text-secondary mb-6">
          As we look to the future, we remain committed to our mission of providing
          exceptional Islamic education. Our plans include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
          <li>Expanding our facilities to accommodate growing student numbers</li>
          <li>Introducing new subjects and programs to broaden our curriculum</li>
          <li>Strengthening partnerships with universities and employers</li>
          <li>Enhancing our use of technology in teaching and learning</li>
          <li>Developing our alumni network to support current students</li>
        </ul>
        <p className="text-body text-text-secondary">
          With the support of our community, we are confident that Westwood Boys School
          will continue to thrive and produce young men ready to change the world.
        </p>
      </ContentSection>

      <CTASection />
    </>
  )
}
