import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Inspection Reports",
  description: "Inspection reports for Westwood Boys School.",
}

const reports = [
  {
    title: "Ofsted Inspection Report",
    date: "28 February – 2 March 2023",
    downloadUrl: "/documents/ofsted-report-2023.pdf",
  },
]

export default function ReportsPage() {
  return (
    <>
      <PageHero
        title="Inspection Reports"
        subtitle="Our School"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-8">
              Please click the links below to access our school&apos;s inspection reports.
            </p>
            <ul className="divide-y divide-slate-200">
              {reports.map((report) => (
                <li key={report.title} className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-brand-navy">{report.title}</p>
                    <p className="text-text-muted text-sm">{report.date}</p>
                  </div>
                  <a
                    href={report.downloadUrl}
                    download
                    className="inline-flex items-center gap-2 text-brand-navy hover:text-accent-gold transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  )
}
