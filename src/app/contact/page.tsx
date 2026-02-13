import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Westwood Boys School. Get in touch with our admissions team, request information, or arrange a visit.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "01234 567 890",
    subtext: "Mon-Fri, 8:00am - 4:30pm",
    href: "tel:01234567890",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@westwoodboys.org",
    subtext: "We respond within 2 working days",
    href: "mailto:info@westwoodboys.org",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 School Lane",
    subtext: "Town, County, AB1 2CD",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 8:00am - 4:30pm",
    subtext: "Closed weekends & school holidays",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We'd love to hear from you. Reach out with any questions about admissions, school life, or to arrange a visit."
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-h3 text-brand-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start gap-4 group"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center shrink-0 group-hover:bg-brand-navy transition-colors">
                          <item.icon className="w-5 h-5 text-brand-navy group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-navy">
                            {item.title}
                          </h3>
                          <p className="text-text-secondary group-hover:text-brand-navy transition-colors">
                            {item.details}
                          </p>
                          <p className="text-sm text-text-muted">{item.subtext}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-navy">
                            {item.title}
                          </h3>
                          <p className="text-text-secondary">{item.details}</p>
                          <p className="text-sm text-text-muted">{item.subtext}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-10 p-6 bg-surface-slate rounded-2xl">
                <h3 className="font-serif font-semibold text-brand-navy mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/admissions"
                      className="text-text-secondary hover:text-brand-navy transition-colors"
                    >
                      Admissions Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admissions/open-days"
                      className="text-text-secondary hover:text-brand-navy transition-colors"
                    >
                      Book an Open Day
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admissions/fees"
                      className="text-text-secondary hover:text-brand-navy transition-colors"
                    >
                      Fees & Bursaries
                    </a>
                  </li>
                  <li>
                    <a
                      href="/parents/policies"
                      className="text-text-secondary hover:text-brand-navy transition-colors"
                    >
                      School Policies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface-slate rounded-3xl p-8">
                <h2 className="font-serif text-h3 text-brand-navy mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-8">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">
              Find Us
            </h2>
            <p className="text-body text-text-muted">
              Conveniently located with good transport links and free parking.
            </p>
          </div>
          <div className="aspect-[21/9] bg-slate-300 rounded-3xl flex items-center justify-center">
            <div className="text-center text-text-muted">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Map placeholder</p>
              <p className="text-sm">123 School Lane, Town, County, AB1 2CD</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
