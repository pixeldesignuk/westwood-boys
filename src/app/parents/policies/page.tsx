import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Policies",
  description: "School policies at Westwood Boys School.",
}

const policies = [
  "Safeguarding Policy",
  "Allegations Against Staff and Low Level Concerns",
  "Keeping Children Safe in Education – Part 1",
  "Relationships and Sex Education Policy",
  "Admissions Policy",
  "Curriculum Policy",
  "Assessment and Feedback Policy",
  "Anti-Bullying Policy",
  "Behaviour Policy",
  "Health and Safety Policy",
  "Educational Visits Policy",
  "Accessibility Policy",
  "Visitors and External Speakers Policy",
  "Complaints Policy",
  "Equal Opportunities Policy",
]

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Policies"
        subtitle="Parents"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-8">
              The following policies are available upon request:
            </p>

            <ul className="divide-y divide-slate-200">
              {policies.map((policy) => (
                <li key={policy} className="py-3 text-text-secondary">
                  {policy}
                </li>
              ))}
            </ul>

            <p className="text-body text-text-muted mt-8">
              To request a copy of any policy, please contact the school office at{" "}
              <a href="mailto:office@westwoodboysschool.org" className="text-brand-navy hover:text-accent-gold transition-colors">
                office@westwoodboysschool.org
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
