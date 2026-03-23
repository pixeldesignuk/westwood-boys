import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Policies",
  description: "School policies at Westwood Boys School.",
}

const downloadablePolicies = [
  {
    title: "Safeguarding Policy",
    date: "1 September 2025",
    downloadUrl: "/documents/safeguarding-policy-september-2025.pdf",
  },
  {
    title: "Keeping Children Safe in Education 2025 – Part 1",
    date: "2025",
    downloadUrl: "/documents/kcsie-2025-part-1.pdf",
  },
]

const otherPolicies = [
  "Allegations Against Staff and Low Level Concerns",
  "Relationships and Sex Education Policy",
  "Admissions Policy",
  "Curriculum Policy",
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
              The following key policies are available to download:
            </p>

            <ul className="divide-y divide-slate-200 mb-12">
              {downloadablePolicies.map((policy) => (
                <li key={policy.title} className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-brand-navy">{policy.title}</p>
                    <p className="text-text-muted text-sm">{policy.date}</p>
                  </div>
                  <a
                    href={policy.downloadUrl}
                    download
                    className="inline-flex items-center gap-2 text-brand-navy hover:text-accent-gold transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-h3 text-brand-navy mb-6">Other Policies</h2>
            <p className="text-body text-text-secondary mb-6">
              The following policies are available upon request:
            </p>

            <ul className="divide-y divide-slate-200">
              {otherPolicies.map((policy) => (
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
