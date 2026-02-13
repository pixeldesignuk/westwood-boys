import type { Metadata } from "next"
import { PageHero, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { FileText, Download, Shield, BookOpen, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Access school policies and documents for Westwood Boys School including safeguarding, academic, and behavioral policies.",
}

const policyCategories = [
  {
    title: "Safeguarding",
    icon: Shield,
    policies: [
      { name: "Safeguarding Policy", date: "September 2024", url: "/policies/safeguarding.pdf" },
      { name: "Child Protection Policy", date: "September 2024", url: "/policies/child-protection.pdf" },
      { name: "Online Safety Policy", date: "September 2024", url: "/policies/online-safety.pdf" },
      { name: "Allegations Against Staff", date: "September 2024", url: "/policies/allegations-staff.pdf" },
    ],
  },
  {
    title: "Academic",
    icon: BookOpen,
    policies: [
      { name: "Teaching & Learning Policy", date: "September 2024", url: "/policies/teaching-learning.pdf" },
      { name: "Assessment Policy", date: "September 2024", url: "/policies/assessment.pdf" },
      { name: "Homework Policy", date: "September 2024", url: "/policies/homework.pdf" },
      { name: "SEND Policy", date: "September 2024", url: "/policies/send.pdf" },
    ],
  },
  {
    title: "Behaviour & Welfare",
    icon: Heart,
    policies: [
      { name: "Behaviour Policy", date: "September 2024", url: "/policies/behaviour.pdf" },
      { name: "Anti-Bullying Policy", date: "September 2024", url: "/policies/anti-bullying.pdf" },
      { name: "Attendance Policy", date: "September 2024", url: "/policies/attendance.pdf" },
      { name: "Uniform Policy", date: "September 2024", url: "/policies/uniform.pdf" },
    ],
  },
  {
    title: "School Operations",
    icon: Users,
    policies: [
      { name: "Admissions Policy", date: "September 2024", url: "/policies/admissions.pdf" },
      { name: "Complaints Policy", date: "September 2024", url: "/policies/complaints.pdf" },
      { name: "Health & Safety Policy", date: "September 2024", url: "/policies/health-safety.pdf" },
      { name: "Privacy Policy", date: "September 2024", url: "/policies/privacy.pdf" },
    ],
  },
]

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="School Policies"
        subtitle="Parents"
        description="Access our school policies and key documents. All policies are regularly reviewed and updated."
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {policyCategories.map((category) => (
              <div
                key={category.title}
                className="bg-surface-slate rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-brand-navy">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {category.policies.map((policy) => (
                    <a
                      key={policy.name}
                      href={policy.url}
                      download
                      className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-brand-navy" />
                        <div>
                          <span className="font-medium text-brand-navy group-hover:text-accent-gold transition-colors">
                            {policy.name}
                          </span>
                          <p className="text-xs text-text-muted">{policy.date}</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="slate" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-h2 text-brand-navy mb-6">
              Policy Updates
            </h2>
            <p className="text-body text-text-secondary mb-8">
              All school policies are reviewed annually or more frequently when
              required by changes in legislation or guidance. The date shown
              indicates the most recent review.
            </p>
            <p className="text-body text-text-secondary mb-8">
              If you have questions about any of our policies or would like to
              request a paper copy, please contact the school office.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
