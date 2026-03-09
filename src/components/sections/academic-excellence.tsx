import Link from "next/link"
import { ArrowRight, GraduationCap, BookOpen, Award, Users } from "lucide-react"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: GraduationCap,
    title: "Student-Centred Learning",
    description: "Low learner-teacher ratios allow us to deliver personalised education, stretching higher ability learners and supporting those who need it.",
  },
  {
    icon: BookOpen,
    title: "Broad Curriculum",
    description: "14 subjects at KS3 including English, Maths, Sciences, Arabic, History, Geography, Art, ICT, and Islamic Studies.",
  },
  {
    icon: Award,
    title: "Green Dome Academy",
    description: "Integrated Islamic Studies, Quranic Studies, and Hadith Studies nurturing deep-rooted values alongside academic growth.",
  },
  {
    icon: Users,
    title: "GCSE Preparation",
    description: "Learners begin GCSE work early, with pathways including Triple Science for higher ability students and optional community languages.",
  },
]

export function AcademicExcellenceSection() {
  return (
    <Section background="slate" padding="lg">
      <Container>
        <SectionHeader
          subtitle="Academic Excellence"
          title="Unlocking the Potential of All Learners"
          description="Our curriculum aims to help all learners achieve academic success through a broad, balanced and intellectually stimulating education."
        />

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-navy mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/academics/curriculum" className="group">
              Explore Our Curriculum
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
