import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Westwood Boys School is committed to unlocking the potential of all learners.",
}

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="Curriculum"
        subtitle="About"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-4">
              Westwood Boys School is committed to unlocking the potential of all learners. The curriculum aims to help all learners achieve academic success through a broad, balanced and intellectually stimulating education. It seeks to provide learners with opportunities to fulfil individual potential both through independent effort and collective endeavour. The curriculum will embed the love of learning and support learners in developing enquiring minds.
            </p>

            <p className="text-body text-text-secondary mb-4">
              The aim of our curricular provision is, ultimately, to enable learners to benefit from the opportunities of adult life and to face its challenges. Learners will be encouraged to take on responsibilities in school, offered guidance and counselling to prepare them for the transition to the world of work. They will develop essential communication and interpersonal skills before they leave school.
            </p>

            <p className="text-body text-text-secondary mb-4">
              A great deal of emphasis is laid upon the spiritual, moral, social and cultural development of all learners. The curriculum will enable learners to differentiate between right and wrong. This will help them become responsible citizens and productive members of society.
            </p>

            <p className="text-body text-text-secondary mb-8">
              Fundamental British Values are embedded throughout the school curriculum. We hope that our educational offer will prepare all learners for the challenges and opportunities of modern Britain.
            </p>

            <h2 className="font-serif text-h3 text-brand-navy mb-4">Key Stage 3</h2>

            <p className="text-body text-text-secondary mb-4">
              Learners are grouped according to ability. This allows Teachers to plan for each learner so that they are stretched and challenged appropriately. We aim to identify higher ability learners early and push them so that they can exceed the national average. Lower ability learners are given additional support and helped through after-school classes. This student-centred approach helps learners progress at their own pace.
            </p>

            <p className="text-body text-text-secondary mb-4">
              The following subjects are taught in Key Stage 3 to provide a comprehensive education:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-text-secondary mb-8">
              <li>English</li>
              <li>Maths</li>
              <li>Science</li>
              <li>Arabic Language</li>
              <li>Personal, Social, Health and Citizenship Education</li>
              <li>Information and Communication Technology</li>
              <li>Physical Education</li>
              <li>History</li>
              <li>Geography</li>
              <li>Art and Design</li>
              <li>Religious Studies</li>
              <li>Islamic Studies</li>
              <li>Hadith Studies</li>
              <li>Quranic Studies</li>
            </ul>

            <h2 className="font-serif text-h3 text-brand-navy mb-4">GCSE Qualifications</h2>

            <p className="text-body text-text-secondary mb-4">
              Learners will start GCSE work during Key Stage 3. They will be working towards the following GCSE qualifications:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-text-secondary mb-4">
              <li>English Literature</li>
              <li>English Language</li>
              <li>Mathematics</li>
              <li>Core Science</li>
              <li>Additional Science</li>
              <li>Triple Science*</li>
              <li>Information and Communication Technology</li>
              <li>Religious Studies</li>
              <li>Citizenship</li>
              <li>History</li>
              <li>Arabic</li>
              <li>Bengali**</li>
              <li>Urdu**</li>
            </ul>

            <p className="text-text-muted text-sm mb-4">
              *for higher ability learners &nbsp;&nbsp; **optional
            </p>

            <p className="text-body text-text-secondary">
              Learners will continue with their individual learning plans in Quranic Studies and assessed at the end of each term.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
