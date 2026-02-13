import type { Metadata } from "next"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Scroll, BookOpen, Heart, Globe, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Specialism",
  description:
    "Learn about our specialist areas at Westwood Boys School, including Islamic education, character development, and academic excellence.",
}

const specialisms = [
  {
    icon: Scroll,
    title: "Islamic Education",
    description:
      "Comprehensive Islamic studies program including Quran, Hadith, Fiqh, and Arabic, integrated throughout school life.",
    features: [
      "Daily Quran recitation and memorization",
      "Islamic Studies as a core GCSE subject",
      "Arabic language instruction",
      "Green Dome Academy integration",
    ],
  },
  {
    icon: Heart,
    title: "Character Development",
    description:
      "Structured program developing akhlaq (character), leadership, and service to community.",
    features: [
      "Weekly character education sessions",
      "Leadership opportunities for all students",
      "Community service projects",
      "Mentoring and peer support programs",
    ],
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Rigorous academic programs with small class sizes and personalized support.",
    features: [
      "Average class size of 15 students",
      "Regular assessment and intervention",
      "Extension programs for high achievers",
      "Exam preparation and revision support",
    ],
  },
]

export default function SpecialismPage() {
  return (
    <>
      <PageHero
        title="Our Specialism"
        subtitle="Academics"
        description="What makes Westwood Boys School unique: our distinctive approach to Islamic education, character development, and academic excellence."
      />

      <ContentSection
        image="/images/specialism.jpg"
        imageAlt="Students in Islamic studies class"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">
          A Distinctive Education
        </h2>
        <p className="text-body-lg text-text-secondary mb-6">
          Westwood Boys School offers a unique educational experience that combines
          academic rigour with Islamic values and character development. Our approach
          is designed to develop the whole person – intellectually, spiritually, and
          morally.
        </p>
        <p className="text-body text-text-secondary">
          Our three core specialisms – Islamic Education, Character Development, and
          Academic Excellence – work together to prepare young men who are not only
          successful students but also confident, compassionate individuals ready
          to make a positive impact on the world.
        </p>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="space-y-12">
            {specialisms.map((specialism, index) => (
              <div
                key={specialism.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center">
                      <specialism.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-brand-navy">
                      {specialism.title}
                    </h3>
                  </div>
                  <p className="text-body-lg text-text-secondary mb-6">
                    {specialism.description}
                  </p>
                  <ul className="space-y-3">
                    {specialism.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-text-secondary"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-white rounded-3xl p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-[4/3] bg-surface-slate rounded-xl flex items-center justify-center">
                    <specialism.icon className="w-24 h-24 text-brand-navy/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="navy" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-h2 text-white mb-6">
              The Westwood Difference
            </h2>
            <p className="text-body-lg text-white/80 mb-8">
              Our unique combination of Islamic education, character development,
              and academic excellence means our students graduate with:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <Award className="w-10 h-10 text-accent-gold mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Strong Qualifications</h3>
                <p className="text-white/70 text-sm">
                  GCSE results well above national average
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <Heart className="w-10 h-10 text-accent-gold mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Strong Character</h3>
                <p className="text-white/70 text-sm">
                  Integrity, compassion, and resilience
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <Globe className="w-10 h-10 text-accent-gold mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Strong Faith</h3>
                <p className="text-white/70 text-sm">
                  Confident Islamic identity and practice
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
