import type { Metadata } from "next"
import { PageHero, ContentSection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Explore our broad and balanced curriculum at Westwood Boys School, combining academic excellence with Islamic studies.",
}

const ks3Subjects = [
  "English",
  "Maths",
  "Science",
  "Arabic Language",
  "Personal, Social, Health and Citizenship Education",
  "Information and Communication Technology",
  "Physical Education",
  "History",
  "Geography",
  "Art and Design",
  "Religious Studies",
  "Islamic Studies",
  "Quranic Studies",
]

const gcseSubjects = [
  "English Literature",
  "English Language",
  "Mathematics",
  "Core Science",
  "Additional Science",
  "Triple Science",
  "Information and Communication Technology",
  "Religious Studies",
  "Citizenship",
  "History",
  "Arabic",
]

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="Our Curriculum"
        subtitle="Academics"
      />

      <ContentSection
        image="/images/curriculum-new.png"
        imageAlt="Curriculum at Westwood Boys School"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">
          Unlocking Potential
        </h2>
        <p className="text-body text-text-secondary mb-4">
          Westwood Boys School is committed to unlocking the potential of all learners. The curriculum aims to help all learners achieve academic success through a broad, balanced and intellectually stimulating education. It seeks to provide learners with opportunities to fulfil individual potential both through independent effort and collective endeavour. The curriculum will embed the love of learning and support learners in developing enquiring minds.
        </p>
        <p className="text-body text-text-secondary mb-4">
          The aim of our curricular provision is, ultimately, to enable learners to benefit from the opportunities of adult life and to face its challenges. Learners will be encouraged to take on responsibilities in school, offered guidance and counselling to prepare them for the transition to the world of work. They will develop essential communication and interpersonal skills before they leave school.
        </p>
        <p className="text-body text-text-secondary mb-4">
          A great deal of emphasis is laid upon the spiritual, moral, social and cultural development of all learners. The curriculum will enable learners to differentiate between right and wrong. This will help them become responsible citizens and productive members of society.
        </p>
        <p className="text-body text-text-secondary">
          Fundamental British Values are embedded throughout the school curriculum. We hope that our educational offer will prepare all learners for the challenges and opportunities of modern Britain.
        </p>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Key Stage 3
            </h2>
            <p className="text-body text-text-secondary mb-6">
              Teachers plan for each learner so that they are stretched and challenged appropriately. We aim to identify learners of higher aptitude early and push them so that they can exceed the national average. Learners are given additional support and helped through intervention sessions and after-school classes. This student-centred approach helps learners progress at their own pace.
            </p>
            <p className="text-body text-text-secondary mb-4">
              The following subjects are taught in Key Stage 3 to provide a comprehensive education:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              {ks3Subjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              GCSE Qualifications
            </h2>
            <p className="text-body text-text-secondary mb-4">
              Learners will start GCSE work during this phase. They will be working towards the following GCSE qualifications:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
              {gcseSubjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
            <p className="text-body text-text-secondary">
              Learners will continue with their Individual learning plans in Quranic Studies and assessed at the end of each term.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
