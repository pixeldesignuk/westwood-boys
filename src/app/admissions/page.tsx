import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to Westwood Boys School. Learn about our admissions process, entry requirements, and how to book an open day visit.",
}

const admissionsSteps = [
  {
    step: 1,
    title: "Book an Open Day",
    description:
      "Visit our school to meet staff, tour facilities, and experience our community firsthand.",
    icon: Calendar,
  },
  {
    step: 2,
    title: "Submit Application",
    description:
      "Complete our online application form with supporting documentation.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Assessment Day",
    description:
      "Students attend an assessment day including academic tests and interview.",
    icon: Users,
  },
  {
    step: 4,
    title: "Offer & Enrollment",
    description:
      "Successful applicants receive an offer to join our school community.",
    icon: CheckCircle,
  },
]

const keyDates = [
  { event: "Open Day - February", date: "Saturday, 15th February 2025" },
  { event: "Open Day - March", date: "Saturday, 22nd March 2025" },
  { event: "Application Deadline (Year 7)", date: "Friday, 28th February 2025" },
  { event: "Assessment Day", date: "Saturday, 15th March 2025" },
  { event: "Offers Released", date: "Friday, 28th March 2025" },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Join Us"
        description="Begin your son's journey at Westwood Boys School. We welcome applications from families who share our vision of academic excellence and Islamic values."
      />

      <ContentSection
        image="/images/admissions.jpg"
        imageAlt="Students in school uniform"
        imagePosition="right"
      >
        <h2 className="font-serif text-h2 text-brand-navy mb-6">
          Join Our Community
        </h2>
        <p className="text-body-lg text-text-secondary mb-6">
          We welcome applications from boys entering Years 7-10. Our admissions
          process is designed to identify students who will thrive in our academic
          and Islamic environment, regardless of their background or prior attainment.
        </p>
        <p className="text-body text-text-secondary mb-6">
          We look for students who demonstrate:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
            <span className="text-text-secondary">
              A genuine desire to learn and succeed academically
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
            <span className="text-text-secondary">
              Commitment to Islamic values and personal development
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
            <span className="text-text-secondary">
              Positive attitude and readiness to contribute to school life
            </span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="cta" size="lg" asChild>
            <Link href="/admissions/open-days">
              Book Open Day
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/admissions/fees">View Fees</Link>
          </Button>
        </div>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Admissions Process
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Our straightforward application process in four steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionsSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent-gold text-white font-bold flex items-center justify-center">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-h2 text-brand-navy mb-6">
                Key Dates 2025
              </h2>
              <div className="space-y-4">
                {keyDates.map((item) => (
                  <div
                    key={item.event}
                    className="flex items-center justify-between p-4 bg-surface-slate rounded-xl"
                  >
                    <span className="font-medium text-brand-navy">{item.event}</span>
                    <span className="text-text-muted">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-6">Contact Admissions</h3>
              <p className="text-white/80 mb-6">
                Our admissions team is here to help with any questions about the
                application process.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:01234567890"
                  className="flex items-center gap-3 text-white hover:text-accent-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  01234 567 890
                </a>
                <a
                  href="mailto:admissions@westwoodboys.org"
                  className="flex items-center gap-3 text-white hover:text-accent-gold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  admissions@westwoodboys.org
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link href="/contact">
                    Request Information Pack
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
