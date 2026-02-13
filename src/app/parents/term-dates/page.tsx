import type { Metadata } from "next"
import { PageHero, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Term Dates",
  description:
    "View term dates and school holidays for Westwood Boys School academic year 2024-25.",
}

const termDates = [
  {
    term: "Autumn Term 2024",
    dates: [
      { label: "Term Starts", date: "Wednesday, 4th September 2024" },
      { label: "Half Term", date: "Monday, 28th October - Friday, 1st November 2024" },
      { label: "Term Ends", date: "Friday, 20th December 2024" },
    ],
  },
  {
    term: "Spring Term 2025",
    dates: [
      { label: "Term Starts", date: "Monday, 6th January 2025" },
      { label: "Half Term", date: "Monday, 17th February - Friday, 21st February 2025" },
      { label: "Term Ends", date: "Friday, 4th April 2025" },
    ],
  },
  {
    term: "Summer Term 2025",
    dates: [
      { label: "Term Starts", date: "Tuesday, 22nd April 2025" },
      { label: "Half Term", date: "Monday, 26th May - Friday, 30th May 2025" },
      { label: "Term Ends", date: "Friday, 18th July 2025" },
    ],
  },
]

const insetDays = [
  "Monday, 2nd September 2024",
  "Tuesday, 3rd September 2024",
  "Monday, 4th November 2024",
  "Monday, 7th January 2025",
  "Friday, 27th June 2025",
]

export default function TermDatesPage() {
  return (
    <>
      <PageHero
        title="Term Dates"
        subtitle="Parents"
        description="Academic calendar for 2024-25 including term dates, half terms, and INSET days."
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="flex justify-end mb-8">
            <Button variant="outline" asChild>
              <a href="/documents/term-dates-2024-25.pdf" download>
                <Download className="w-4 h-4" />
                Download Calendar (PDF)
              </a>
            </Button>
          </div>

          <div className="space-y-8">
            {termDates.map((term) => (
              <div
                key={term.term}
                className="bg-surface-slate rounded-2xl p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-brand-navy">
                    {term.term}
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {term.dates.map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-4">
                      <span className="text-text-muted text-sm">{item.label}</span>
                      <p className="font-medium text-brand-navy mt-1">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="slate" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-h2 text-brand-navy mb-6">
                INSET Days
              </h2>
              <p className="text-body text-text-secondary mb-6">
                INSET (In-Service Training) days are for staff professional development.
                School is closed to students on these dates.
              </p>
              <div className="bg-white rounded-2xl p-6">
                <ul className="space-y-3">
                  {insetDays.map((day) => (
                    <li
                      key={day}
                      className="flex items-center gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <Calendar className="w-4 h-4 text-accent-gold" />
                      <span className="text-text-secondary">{day}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-6">Important Notes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2" />
                  <p className="text-white/80">
                    Students should arrive by <strong>8:15 AM</strong> each day.
                    Registration begins at 8:20 AM.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2" />
                  <p className="text-white/80">
                    The school day ends at <strong>3:30 PM</strong> (3:00 PM on Fridays).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2" />
                  <p className="text-white/80">
                    Parents are advised not to book holidays during term time.
                    Unauthorized absence affects attendance records.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2" />
                  <p className="text-white/80">
                    Eid al-Fitr and Eid al-Adha dates will be confirmed closer
                    to the time based on moon sighting.
                  </p>
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
