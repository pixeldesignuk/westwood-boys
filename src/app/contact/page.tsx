import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Westwood Boys School. 121 Union Street, Oldham OL1 1TE.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Our School"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <div>
                <p className="font-serif font-semibold text-brand-navy text-lg">Kamal Uddin Khan</p>
                <p className="text-text-muted text-sm">Principal</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <p className="text-text-secondary">
                    Westwood Boys School<br />
                    121 Union Street<br />
                    Oldham<br />
                    OL1 1TE
                  </p>
                </div>

                <a href="tel:01614253599" className="flex items-center gap-3 text-text-secondary hover:text-brand-navy transition-colors">
                  <Phone className="w-5 h-5 text-brand-navy" />
                  0161 425 3599
                </a>

                <a href="mailto:office@westwoodboysschool.org" className="flex items-center gap-3 text-text-secondary hover:text-brand-navy transition-colors">
                  <Mail className="w-5 h-5 text-brand-navy" />
                  office@westwoodboysschool.org
                </a>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div className="space-y-4">
              <p className="text-text-muted text-sm">
                The School&apos;s Proprietor is The Green Dome Academy.
              </p>

              <div>
                <p className="font-serif font-semibold text-brand-navy text-lg">Jamal Khan</p>
                <p className="text-text-muted text-sm">Chair of Governors</p>
              </div>

              <a href="mailto:governor@westwoodboysschool.org" className="flex items-center gap-3 text-text-secondary hover:text-brand-navy transition-colors">
                <Mail className="w-5 h-5 text-brand-navy" />
                governor@westwoodboysschool.org
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
