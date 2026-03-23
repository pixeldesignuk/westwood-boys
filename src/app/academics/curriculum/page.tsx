import type { Metadata } from "next"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Languages,
  Palette,
  Dumbbell,
  Code,
  Scroll,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Explore our broad and balanced curriculum at Westwood Boys School, combining academic excellence with Islamic studies.",
}

const keyStage3Subjects = [
  { name: "English", icon: BookOpen },
  { name: "Mathematics", icon: Calculator },
  { name: "Science", icon: FlaskConical },
  { name: "Islamic Studies", icon: Scroll },
  { name: "Arabic", icon: Languages },
  { name: "History", icon: Globe },
  { name: "Geography", icon: Globe },
  { name: "Computing", icon: Code },
  { name: "Art & Design", icon: Palette },
  { name: "Physical Education", icon: Dumbbell },
]

const gcseSubjects = [
  {
    category: "Core Subjects",
    subjects: ["English Language", "English Literature", "Mathematics", "Combined Science / Triple Science"],
  },
  {
    category: "Humanities",
    subjects: ["History", "Geography", "Religious Studies (Islam)"],
  },
  {
    category: "Languages",
    subjects: ["Arabic", "Urdu"],
  },
  {
    category: "Other Options",
    subjects: ["Business Studies", "Computer Science", "Art & Design"],
  },
]

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="Our Curriculum"
        subtitle="Academics"
        description="A broad, balanced curriculum that prepares students for success while nurturing Islamic values and character."
      />

      <ContentSection
        image="/images/curriculum-new.png"
        imageAlt="Students in classroom"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">
          Excellence in Education
        </h2>
        <p className="text-body-lg text-text-secondary mb-6">
          Our curriculum is designed to challenge and inspire, providing students with
          a solid foundation in core subjects while developing critical thinking,
          creativity, and character.
        </p>
        <p className="text-body text-text-secondary mb-6">
          We follow the National Curriculum enhanced with Islamic studies and Arabic,
          ensuring our students are well-prepared for GCSE examinations and beyond.
          Our small class sizes allow for personalized attention and differentiated
          teaching to meet each student&apos;s needs.
        </p>
        <p className="text-body text-text-secondary">
          Islamic principles are woven throughout the curriculum, helping students
          see the relevance of their faith to all areas of learning and life.
        </p>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Key Stage 3 (Years 7-9)
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              A broad foundation covering all essential subjects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {keyStage3Subjects.map((subject) => (
              <div
                key={subject.name}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-brand-navy/10 flex items-center justify-center mx-auto mb-3">
                  <subject.icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="font-semibold text-brand-navy">{subject.name}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              GCSE Options (Years 10-11)
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Students choose their GCSE subjects with guidance from teachers and parents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gcseSubjects.map((category) => (
              <div
                key={category.category}
                className="bg-surface-slate rounded-2xl p-6"
              >
                <h3 className="font-serif font-semibold text-lg text-brand-navy mb-4 pb-3 border-b border-slate-200">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.subjects.map((subject) => (
                    <li key={subject} className="text-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 shrink-0" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ContentSection
        title="Beyond the Classroom"
        image="/images/extra-curricular.jpg"
        imageAlt="Students in extracurricular activities"
        imagePosition="left"
        background="cream"
      >
        <p className="text-body text-text-secondary mb-6">
          We believe education extends beyond academic subjects. Our enrichment program
          includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
          <li>Weekly Islamic Circle and Quran study</li>
          <li>Sports clubs and inter-school competitions</li>
          <li>Debate and public speaking</li>
          <li>Coding and robotics club</li>
          <li>Art and creative workshops</li>
          <li>Community service projects</li>
          <li>Educational trips and visits</li>
        </ul>
        <p className="text-body text-text-secondary">
          These activities help students develop confidence, teamwork, and leadership
          skills while pursuing their interests and passions.
        </p>
      </ContentSection>

      <CTASection />
    </>
  )
}
