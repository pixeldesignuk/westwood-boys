import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Fees",
  description:
    "View tuition fees and payment options for Westwood Boys School. Information about bursaries and financial assistance.",
}

const feeStructure = [
  {
    yearGroup: "Year 7",
    termlyFee: "£2,500",
    annualFee: "£7,500",
  },
  {
    yearGroup: "Year 8",
    termlyFee: "£2,600",
    annualFee: "£7,800",
  },
  {
    yearGroup: "Year 9",
    termlyFee: "£2,700",
    annualFee: "£8,100",
  },
  {
    yearGroup: "Year 10",
    termlyFee: "£2,800",
    annualFee: "£8,400",
  },
  {
    yearGroup: "Year 11",
    termlyFee: "£2,900",
    annualFee: "£8,700",
  },
]

const includedItems = [
  "All tuition and teaching",
  "Islamic studies and Green Dome Academy",
  "Textbooks and core learning materials",
  "Access to school library and IT facilities",
  "Extracurricular clubs and activities",
  "School trips (day visits)",
  "Progress reports and parents' evenings",
  "Pastoral care and wellbeing support",
]

const additionalCosts = [
  { item: "School Uniform", cost: "Approx. £250 (one-time)" },
  { item: "PE Kit", cost: "Approx. £80 (one-time)" },
  { item: "Examination Fees", cost: "Included in Year 11 fees" },
  { item: "Residential Trips", cost: "Variable (optional)" },
  { item: "School Meals", cost: "£4.50/day or £22.50/week" },
]

const faqs = [
  {
    question: "When are fees due?",
    answer:
      "Fees are due at the start of each term. We offer payment plans including monthly direct debit for families who prefer to spread the cost.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, there is a non-refundable registration fee of £100 payable upon application. A deposit of £500 is required upon acceptance of a place.",
  },
  {
    question: "Do you offer sibling discounts?",
    answer:
      "Yes, we offer a 10% discount on fees for second and subsequent siblings enrolled at the school.",
  },
  {
    question: "Are bursaries available?",
    answer:
      "We have a limited bursary fund to assist families facing financial hardship. Applications are assessed individually based on need.",
  },
]

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees & Costs"
        subtitle="Admissions"
        description="Transparent information about tuition fees, payment options, and financial assistance."
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Fee Structure 2024-25
            </h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Our fees reflect our commitment to providing excellent education with
              small class sizes and comprehensive Islamic studies.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-brand-navy/10">
                  <th className="text-left py-4 px-6 font-serif font-semibold text-brand-navy">
                    Year Group
                  </th>
                  <th className="text-center py-4 px-6 font-serif font-semibold text-brand-navy">
                    Termly Fee
                  </th>
                  <th className="text-center py-4 px-6 font-serif font-semibold text-brand-navy">
                    Annual Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, index) => (
                  <tr
                    key={row.yearGroup}
                    className={index % 2 === 0 ? "bg-surface-slate" : "bg-white"}
                  >
                    <td className="py-4 px-6 font-medium text-brand-navy">
                      {row.yearGroup}
                    </td>
                    <td className="text-center py-4 px-6 text-text-secondary">
                      {row.termlyFee}
                    </td>
                    <td className="text-center py-4 px-6 text-text-secondary font-semibold">
                      {row.annualFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-surface-slate rounded-2xl p-6">
              <h3 className="font-serif font-semibold text-lg text-brand-navy mb-4">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-slate rounded-2xl p-6">
              <h3 className="font-serif font-semibold text-lg text-brand-navy mb-4">
                Additional Costs
              </h3>
              <div className="space-y-3">
                {additionalCosts.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-center justify-between pb-3 border-b border-slate-200 last:border-0"
                  >
                    <span className="text-text-secondary">{item.item}</span>
                    <span className="font-medium text-brand-navy">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="slate" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-h2 text-brand-navy mb-6">
                Payment Options
              </h2>
              <p className="text-body text-text-secondary mb-6">
                We offer flexible payment options to make our school accessible
                to families:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy">Annual Payment</strong>
                    <p className="text-text-secondary text-sm">
                      Pay annually and receive a 2.5% discount
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy">Termly Payment</strong>
                    <p className="text-text-secondary text-sm">
                      Pay at the start of each of the three terms
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy">Monthly Direct Debit</strong>
                    <p className="text-text-secondary text-sm">
                      Spread the cost over 10 monthly payments (September-June)
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-white rounded-2xl">
                <h3 className="font-serif font-semibold text-lg text-brand-navy mb-3">
                  Sibling Discount
                </h3>
                <p className="text-text-secondary">
                  10% discount on fees for second and subsequent siblings enrolled
                  at the school.
                </p>
              </div>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-6">Bursaries & Assistance</h3>
              <p className="text-white/80 mb-6">
                We are committed to making our school accessible to families from
                all backgrounds. Our bursary program provides fee assistance to
                families facing financial hardship.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Means-tested financial assistance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Up to 50% fee reduction available
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Confidential application process
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-gold" />
                  Annual review and renewal
                </li>
              </ul>
              <Button variant="cta" className="w-full" asChild>
                <Link href="/contact">
                  Enquire About Bursaries
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-surface-slate rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
