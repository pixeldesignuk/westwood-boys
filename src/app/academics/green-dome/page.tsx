import type { Metadata } from "next"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { BookOpen, Moon, Heart, Users, Star, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Green Dome Academy",
  description:
    "Discover the Green Dome Academy at Westwood Boys School - our integrated Islamic studies program developing spiritual and academic growth.",
}

const programComponents = [
  {
    icon: BookOpen,
    title: "Quran Studies",
    description: "Recitation, tajweed, memorization, and understanding of the Holy Quran.",
  },
  {
    icon: Star,
    title: "Hadith & Seerah",
    description: "Study of the Prophet's sayings and his exemplary life.",
  },
  {
    icon: Heart,
    title: "Aqeedah & Fiqh",
    description: "Islamic beliefs and practical jurisprudence for daily life.",
  },
  {
    icon: Moon,
    title: "Arabic Language",
    description: "Classical Arabic to access Islamic texts in their original language.",
  },
]

const dailySchedule = [
  { time: "8:00 AM", activity: "Morning Assembly & Dua" },
  { time: "8:15 AM", activity: "Quran Recitation" },
  { time: "1:00 PM", activity: "Dhuhr Prayer" },
  { time: "3:00 PM", activity: "Asr Prayer" },
  { time: "3:30 PM", activity: "Green Dome Academy Session" },
]

export default function GreenDomePage() {
  return (
    <>
      <PageHero
        title="Green Dome Academy"
        subtitle="Academics"
        description="Our integrated Islamic studies program nurturing spiritual growth alongside academic excellence."
      />

      <ContentSection
        image="/images/green-dome.jpg"
        imageAlt="Students in Islamic studies session"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">About the Academy</h2>
        <p className="text-body-lg text-text-secondary mb-6">
          The Green Dome Academy is the heart of Islamic education at Westwood Boys
          School. Named after the iconic green dome of Masjid an-Nabawi in Madinah,
          our program aims to nurture young Muslims who combine knowledge, practice,
          and character.
        </p>
        <p className="text-body text-text-secondary mb-6">
          Unlike traditional secular-Islamic education models where Islamic studies
          are separate from the main curriculum, the Green Dome Academy integrates
          Islamic learning throughout the school day. This ensures that Islamic
          values inform all aspects of our students&apos; education and development.
        </p>
        <p className="text-body text-text-secondary">
          Our qualified Islamic studies teachers work alongside academic staff to
          create a holistic educational experience that prepares students for success
          in this world and the hereafter.
        </p>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Program Components
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              A comprehensive curriculum covering all aspects of Islamic knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programComponents.map((component) => (
              <div
                key={component.title}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/10 flex items-center justify-center mx-auto mb-4">
                  <component.icon className="w-7 h-7 text-brand-navy" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-brand-navy mb-2">
                  {component.title}
                </h3>
                <p className="text-text-secondary text-sm">{component.description}</p>
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
                Islam in Daily Life
              </h2>
              <p className="text-body text-text-secondary mb-6">
                Islamic practice is woven into the fabric of school life. Students
                pray together, learn together, and grow together in an environment
                that nurtures their faith.
              </p>
              <p className="text-body text-text-secondary mb-6">
                Our daily schedule incorporates prayer times, Quran recitation, and
                Islamic reminders, ensuring that students develop consistent habits
                of worship and remembrance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  <span className="text-text-secondary">Daily congregational prayers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  <span className="text-text-secondary">Weekly Jumu&apos;ah prayer and khutbah</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  <span className="text-text-secondary">Ramadan program and iftar</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  <span className="text-text-secondary">Eid celebrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  <span className="text-text-secondary">Islamic Circle and halaqah</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-6">Daily Schedule</h3>
              <div className="space-y-4">
                {dailySchedule.map((item) => (
                  <div
                    key={item.time}
                    className="flex items-center gap-4 pb-4 border-b border-white/10 last:border-0"
                  >
                    <div className="w-20 text-accent-gold font-semibold">
                      {item.time}
                    </div>
                    <div className="text-white/80">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="cream" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-h2 text-brand-navy mb-6">
              Achieving Excellence
            </h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Our students consistently achieve outstanding results in Islamic Studies
              GCSE, with many progressing to further Islamic education alongside
              university studies.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <div className="font-serif text-4xl font-bold text-accent-gold mb-2">
                  98%
                </div>
                <div className="text-text-muted text-sm">Grade 4+ in Islamic Studies</div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="font-serif text-4xl font-bold text-accent-gold mb-2">
                  85%
                </div>
                <div className="text-text-muted text-sm">Grade 5+ in Arabic</div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="font-serif text-4xl font-bold text-accent-gold mb-2">
                  15+
                </div>
                <div className="text-text-muted text-sm">Juz memorized (average)</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
