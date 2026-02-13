import type { Metadata } from "next"
import { PageHero, ContentSection, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Discover our mission at Westwood Boys School: to nurture academically excellent, morally grounded young men ready to change the world.",
}

const coreValues = [
  {
    title: "Faith (Iman)",
    description:
      "Developing a strong Islamic identity rooted in knowledge, practice, and love for Allah and His Messenger.",
  },
  {
    title: "Excellence (Ihsan)",
    description:
      "Striving for the highest standards in everything we do, from academic achievement to personal conduct.",
  },
  {
    title: "Character (Akhlaq)",
    description:
      "Building individuals of integrity, compassion, and responsibility who embody the best of Islamic character.",
  },
  {
    title: "Service (Khidmah)",
    description:
      "Inspiring a commitment to serving family, community, and humanity through positive action.",
  },
  {
    title: "Knowledge (Ilm)",
    description:
      "Fostering a lifelong love of learning across both Islamic and worldly sciences.",
  },
  {
    title: "Unity (Ummah)",
    description:
      "Cultivating brotherhood, mutual respect, and appreciation for diversity within our community.",
  },
]

export default function MissionPage() {
  return (
    <>
      <PageHero
        title="Our Mission"
        subtitle="About Us"
        description="To nurture academically excellent, morally grounded young men who are prepared to change the world."
      />

      <ContentSection>
        <h2 className="font-serif text-h2 text-brand-navy mb-6">Mission Statement</h2>
        <p className="text-body-lg text-text-secondary mb-6">
          Westwood Boys School exists to provide an exceptional education that combines
          academic rigour with Islamic values, preparing young men to excel in this
          life and the next.
        </p>
        <p className="text-body text-text-secondary mb-6">
          We are committed to developing the whole person – intellectually, spiritually,
          physically, and socially. Our students graduate not only with strong academic
          qualifications but also with the character, confidence, and conviction to
          make a positive difference in the world.
        </p>
        <p className="text-body text-text-secondary">
          We believe that Islamic education and academic excellence are not just
          compatible but complementary, and we strive to demonstrate this in everything
          we do.
        </p>
      </ContentSection>

      <Section background="slate" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-brand-navy mb-4">Our Core Values</h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              These values guide everything we do at Westwood Boys School.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent-gold" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-brand-navy">
                    {value.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ContentSection
        title="Our Commitment"
        image="/images/classroom.jpg"
        imageAlt="Students in classroom"
        imagePosition="right"
        background="white"
      >
        <p className="text-body text-text-secondary mb-6">
          We are committed to providing:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
          <li>A challenging and engaging curriculum that prepares students for success</li>
          <li>A safe, supportive, and inclusive learning environment</li>
          <li>Qualified, dedicated teachers who inspire and challenge</li>
          <li>A strong partnership with parents and the wider community</li>
          <li>Continuous improvement in all aspects of school life</li>
        </ul>
        <p className="text-body text-text-secondary">
          Together, we work to ensure that every student achieves their full potential
          and leaves our school ready to make a positive impact on the world.
        </p>
      </ContentSection>

      <CTASection />
    </>
  )
}
