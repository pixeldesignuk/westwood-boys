import type { Metadata } from "next"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Users, Target, Brain, Heart, Lightbulb, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Teaching & Learning",
  description:
    "Discover our approach to teaching and learning at Westwood Boys School, where every student is supported to reach their potential.",
}

const teachingPrinciples = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "With an average of 15 students per class, teachers can provide personalized attention and support to every learner.",
  },
  {
    icon: Target,
    title: "High Expectations",
    description:
      "We set ambitious goals for all students and provide the scaffolding they need to achieve them.",
  },
  {
    icon: Brain,
    title: "Active Learning",
    description:
      "Students are engaged through questioning, discussion, collaborative work, and hands-on activities.",
  },
  {
    icon: Heart,
    title: "Growth Mindset",
    description:
      "We nurture resilience and a love of learning, teaching students that effort leads to improvement.",
  },
  {
    icon: Lightbulb,
    title: "Differentiation",
    description:
      "Lessons are adapted to meet different learning needs, ensuring challenge and support for all.",
  },
  {
    icon: CheckCircle,
    title: "Regular Feedback",
    description:
      "Ongoing assessment and feedback help students understand their progress and next steps.",
  },
]

export default function TeachingLearningPage() {
  return (
    <>
      <PageHero
        title="Teaching & Learning"
        subtitle="Academics"
        description="Our approach to teaching is designed to inspire, challenge, and support every student to reach their full potential."
      />

      <ContentSection
        image="/images/teaching.jpg"
        imageAlt="Teacher working with students"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">Our Approach</h2>
        <p className="text-body-lg text-text-secondary mb-6">
          At Westwood Boys School, we believe that excellent teaching is the key to
          excellent learning. Our teachers are passionate, qualified professionals
          who are committed to bringing out the best in every student.
        </p>
        <p className="text-body text-text-secondary mb-6">
          We combine evidence-based teaching strategies with a deep understanding of
          each student&apos;s needs, creating lessons that are engaging, challenging,
          and supportive. Islamic values underpin our approach, emphasizing the
          pursuit of knowledge as an act of worship.
        </p>
        <p className="text-body text-text-secondary">
          Our goal is not just academic success, but the development of independent,
          curious learners who will continue to grow and learn throughout their lives.
        </p>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Our Teaching Principles
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              The foundations of effective teaching and learning at our school.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-brand-navy mb-2">
                  {principle.title}
                </h3>
                <p className="text-text-secondary text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-h2 text-brand-navy mb-6">
                Supporting Every Learner
              </h2>
              <p className="text-body text-text-secondary mb-6">
                We recognize that every student is unique, with different strengths,
                challenges, and learning styles. Our approach includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy">Regular Assessment</strong>
                    <p className="text-text-secondary text-sm">
                      Half-termly assessments and mock examinations to track progress
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy">Intervention Programs</strong>
                    <p className="text-text-secondary text-sm">
                      Targeted support for students who need extra help in specific areas
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy">Extension Activities</strong>
                    <p className="text-text-secondary text-sm">
                      Challenge and enrichment for high-achieving students
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy">SEND Support</strong>
                    <p className="text-text-secondary text-sm">
                      Dedicated support for students with special educational needs
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-6">Parent Partnership</h3>
              <p className="text-white/80 mb-6">
                We believe that learning is most effective when home and school work
                together. Parents are kept informed through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Termly progress reports
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Parents&apos; evenings
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Regular communication via parent portal
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Homework and revision guidance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Workshop sessions on supporting learning
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
