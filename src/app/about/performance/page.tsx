import type { Metadata } from "next"
import { PageHero, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { StatsGrid } from "@/components/ui/stats"
import { TrendingUp, Award, Users, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "School Performance",
  description:
    "View academic results and performance data for Westwood Boys School, including GCSE results and progress measures.",
}

const overallStats = [
  { value: 95, suffix: "%", label: "GCSE Pass Rate (Grade 4+)" },
  { value: 72, suffix: "%", label: "Strong Passes (Grade 5+)" },
  { value: "+0.8", label: "Progress 8 Score" },
  { value: 100, suffix: "%", label: "Positive Destinations" },
]

const subjectResults = [
  { subject: "English Language", grade4Plus: 96, grade5Plus: 78, grade7Plus: 42 },
  { subject: "English Literature", grade4Plus: 94, grade5Plus: 75, grade7Plus: 38 },
  { subject: "Mathematics", grade4Plus: 92, grade5Plus: 70, grade7Plus: 35 },
  { subject: "Science (Combined)", grade4Plus: 90, grade5Plus: 68, grade7Plus: 32 },
  { subject: "Islamic Studies", grade4Plus: 98, grade5Plus: 85, grade7Plus: 55 },
  { subject: "Arabic", grade4Plus: 95, grade5Plus: 80, grade7Plus: 48 },
  { subject: "History", grade4Plus: 88, grade5Plus: 65, grade7Plus: 30 },
  { subject: "Geography", grade4Plus: 90, grade5Plus: 68, grade7Plus: 28 },
]

export default function PerformancePage() {
  return (
    <>
      <PageHero
        title="School Performance"
        subtitle="About Us"
        description="Our academic results and performance data demonstrate our commitment to excellence in education."
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              2023 Results at a Glance
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Our students consistently achieve results above the national average.
            </p>
          </div>
          <StatsGrid stats={overallStats} variant="card" />
        </Container>
      </Section>

      <Section background="slate" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Progress 8 Explanation */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-brand-navy" />
                </div>
                <h2 className="font-serif text-h3 text-brand-navy">
                  Understanding Progress 8
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-text-muted">Our Progress 8 Score</span>
                  <span className="font-serif text-3xl font-bold text-green-600">+0.8</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-400"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-text-muted">
                  <span>Below Average (-1)</span>
                  <span>Average (0)</span>
                  <span>Above Average (+1)</span>
                </div>
              </div>

              <p className="text-body text-text-secondary mb-4">
                Progress 8 measures how well students progress from Key Stage 2 to
                Key Stage 4 compared to students nationally with similar starting points.
              </p>
              <p className="text-body text-text-secondary">
                Our score of <strong>+0.8</strong> means our students make significantly
                more progress than average – equivalent to almost a full grade higher
                across their subjects.
              </p>
            </div>

            {/* Key Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-navy" />
                </div>
                <h2 className="font-serif text-h3 text-brand-navy">
                  Key Achievements 2023
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-accent-gold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy">Grade 9 Achievers</div>
                      <div className="text-sm text-text-muted">Students achieving at least one Grade 9</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-green-600">100%</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy">Positive Destinations</div>
                      <div className="text-sm text-text-muted">Students progressing to further education or employment</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-blue-600">98%</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy">Islamic Studies Excellence</div>
                      <div className="text-sm text-text-muted">Students achieving Grade 4+ in Islamic Studies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Results by Subject
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              GCSE results breakdown for 2023 examination series.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-brand-navy/10">
                  <th className="text-left py-4 px-4 font-serif font-semibold text-brand-navy">
                    Subject
                  </th>
                  <th className="text-center py-4 px-4 font-serif font-semibold text-brand-navy">
                    Grade 4+
                  </th>
                  <th className="text-center py-4 px-4 font-serif font-semibold text-brand-navy">
                    Grade 5+
                  </th>
                  <th className="text-center py-4 px-4 font-serif font-semibold text-brand-navy">
                    Grade 7+
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjectResults.map((result, index) => (
                  <tr
                    key={result.subject}
                    className={index % 2 === 0 ? "bg-surface-slate" : "bg-white"}
                  >
                    <td className="py-4 px-4 font-medium text-brand-navy">
                      {result.subject}
                    </td>
                    <td className="text-center py-4 px-4 text-text-secondary">
                      {result.grade4Plus}%
                    </td>
                    <td className="text-center py-4 px-4 text-text-secondary">
                      {result.grade5Plus}%
                    </td>
                    <td className="text-center py-4 px-4 text-text-secondary">
                      {result.grade7Plus}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
