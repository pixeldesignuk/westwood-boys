import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Open Days",
  description:
    "Book a visit to Westwood Boys School. Experience our community, tour our facilities, and meet our staff at an upcoming open day.",
}

const upcomingOpenDays = [
  {
    date: "Saturday, 15th February 2025",
    time: "10:00 AM - 12:30 PM",
    type: "Main Open Day",
    spotsLeft: 15,
  },
  {
    date: "Saturday, 22nd March 2025",
    time: "10:00 AM - 12:30 PM",
    type: "Main Open Day",
    spotsLeft: 20,
  },
  {
    date: "Wednesday, 12th March 2025",
    time: "9:30 AM - 11:00 AM",
    type: "School Tour",
    spotsLeft: 8,
  },
]

const whatToExpect = [
  {
    title: "Welcome & Introduction",
    description: "Meet our Principal and hear about our vision and values.",
    duration: "20 mins",
  },
  {
    title: "School Tour",
    description: "Student-led tour of our facilities including classrooms, prayer hall, and sports areas.",
    duration: "45 mins",
  },
  {
    title: "Meet the Staff",
    description: "Speak with teachers and department heads about our curriculum.",
    duration: "30 mins",
  },
  {
    title: "Q&A Session",
    description: "Open questions with senior staff and current parents.",
    duration: "25 mins",
  },
  {
    title: "Refreshments",
    description: "Informal chat with staff and other prospective families.",
    duration: "20 mins",
  },
]

export default function OpenDaysPage() {
  return (
    <>
      <PageHero
        title="Open Days"
        subtitle="Visit Us"
        description="Experience Westwood Boys School firsthand. Book your place at an upcoming open day to tour our facilities, meet our staff, and discover our community."
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-h2 text-brand-navy mb-6">
                Upcoming Open Days
              </h2>
              <p className="text-body text-text-secondary mb-8">
                We hold regular open days throughout the year. Book your place
                to experience our school community.
              </p>

              <div className="space-y-4">
                {upcomingOpenDays.map((event) => (
                  <div
                    key={event.date}
                    className="bg-surface-slate rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-brand-navy/10 text-brand-navy text-sm font-medium rounded-full mb-2">
                          {event.type}
                        </span>
                        <h3 className="font-serif font-semibold text-lg text-brand-navy">
                          {event.date}
                        </h3>
                      </div>
                      <span className="text-sm text-accent-gold font-medium">
                        {event.spotsLeft} spots left
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-text-muted text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                    </div>
                    <Button variant="default" size="sm" className="w-full" asChild>
                      <Link href="/contact">
                        Book Your Place
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 text-white sticky top-32">
              <h3 className="font-serif text-2xl mb-6">Can&apos;t Make These Dates?</h3>
              <p className="text-white/80 mb-6">
                We understand schedules can be difficult. We also offer:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  Private school tours by appointment
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  Virtual tours via video call
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  Phone consultations with admissions team
                </li>
              </ul>
              <Button variant="cta" className="w-full" asChild>
                <Link href="/contact">
                  Request Private Tour
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              What to Expect
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Our open days are designed to give you a comprehensive overview of
              school life.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-navy/20" />

              <div className="space-y-8">
                {whatToExpect.map((item, index) => (
                  <div key={item.title} className="relative flex gap-6">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-navy flex items-center justify-center shrink-0 z-10">
                      <span className="font-serif font-bold text-brand-navy">
                        {index + 1}
                      </span>
                    </div>
                    <div className="bg-white rounded-2xl p-6 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-serif font-semibold text-lg text-brand-navy">
                          {item.title}
                        </h3>
                        <span className="text-sm text-accent-gold font-medium">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container>
          <div className="bg-surface-cream rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-h2 text-brand-navy mb-4">
                  Getting Here
                </h2>
                <p className="text-body text-text-secondary mb-6">
                  We&apos;re conveniently located with good transport links.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-navy">Address</strong>
                      <p className="text-text-secondary">
                        123 School Lane, Town, County, AB1 2CD
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-navy">Parking</strong>
                      <p className="text-text-secondary">
                        Free visitor parking available on site
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
                <span className="text-text-muted">Map placeholder</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
