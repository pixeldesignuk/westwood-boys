import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { FileText, Download, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Inspection Reports",
  description:
    "View inspection reports and assessments for Westwood Boys School, including Ofsted and independent school inspections.",
}

const inspectionReports = [
  {
    title: "Ofsted Inspection Report 2023",
    date: "September 2023",
    rating: "Outstanding",
    type: "Ofsted",
    downloadUrl: "/documents/ofsted-2023.pdf",
    summary:
      "The school received Outstanding ratings across all areas, with particular praise for the quality of teaching and the school's Islamic ethos.",
  },
  {
    title: "Independent Schools Inspectorate Report 2022",
    date: "March 2022",
    rating: "Excellent",
    type: "ISI",
    downloadUrl: "/documents/isi-2022.pdf",
    summary:
      "The ISI inspection found the school to be excellent in pupil achievement and personal development.",
  },
  {
    title: "Safeguarding Audit Report 2023",
    date: "November 2023",
    rating: "Compliant",
    type: "Safeguarding",
    downloadUrl: "/documents/safeguarding-2023.pdf",
    summary:
      "Annual safeguarding audit confirmed full compliance with all statutory requirements.",
  },
]

const keyFindings = [
  "Outstanding quality of teaching and learning",
  "Excellent pupil achievement and progress",
  "Strong Islamic ethos and character development",
  "Effective safeguarding arrangements",
  "High standards of pupil behavior and attitudes",
  "Excellent relationships between staff and students",
  "Strong partnership with parents",
  "Well-managed school governance",
]

export default function ReportsPage() {
  return (
    <>
      <PageHero
        title="Inspection Reports"
        subtitle="About Us"
        description="View our inspection reports and see how we maintain the highest standards across all areas of school life."
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {inspectionReports.map((report) => (
              <article
                key={report.title}
                className="bg-surface-slate rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-brand-navy" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      report.rating === "Outstanding"
                        ? "bg-green-100 text-green-700"
                        : report.rating === "Excellent"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {report.rating}
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-lg text-brand-navy mb-2">
                  {report.title}
                </h3>
                <p className="text-text-muted text-sm mb-3">{report.date}</p>
                <p className="text-text-secondary text-sm mb-4">{report.summary}</p>

                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={report.downloadUrl} download>
                    <Download className="w-4 h-4" />
                    Download Report
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="slate" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-h2 text-brand-navy mb-6">
                Key Findings from Our Inspections
              </h2>
              <p className="text-body text-text-secondary mb-6">
                Our inspection reports consistently highlight the following strengths
                of Westwood Boys School:
              </p>
              <ul className="space-y-3">
                {keyFindings.map((finding) => (
                  <li key={finding} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                  <span className="font-serif text-3xl font-bold text-green-700">A+</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-navy mb-2">
                  Outstanding School
                </h3>
                <p className="text-text-muted text-sm">
                  Rated Outstanding by Ofsted in our most recent inspection
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-text-secondary text-sm text-center mb-4">
                  For the full Ofsted report and historical inspection records:
                </p>
                <Button variant="default" asChild className="w-full">
                  <a
                    href="https://reports.ofsted.gov.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Ofsted Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
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
