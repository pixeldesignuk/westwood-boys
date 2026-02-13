import type { Metadata } from "next"
import Image from "next/image"
import { PageHero, CTASection } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Message from the Chair of Governors",
  description:
    "A message from the Chair of Governors of Westwood Boys School, sharing our vision and commitment to excellence in Islamic education.",
}

export default function ChairsMessagePage() {
  return (
    <>
      <PageHero
        title="Message from the Chair of Governors"
        subtitle="About Us"
        description="A word from our Chair about the vision and values that guide Westwood Boys School."
      />

      <Section background="white" padding="lg">
        <Container size="sm">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Photo and Details */}
            <div className="lg:w-1/3 shrink-0">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/chair.jpg"
                    alt="Chair of Governors"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif font-semibold text-xl text-brand-navy">
                    Dr. Abdullah Rahman
                  </h3>
                  <p className="text-text-muted">Chair of Governors</p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:w-2/3">
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-6 w-16 h-16 text-accent-gold/20" />
                <p className="text-body-lg text-text-secondary italic pl-8">
                  Assalamu Alaikum wa Rahmatullahi wa Barakatuh,
                </p>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  It is my great pleasure to welcome you to Westwood Boys School. As Chair
                  of Governors, I am privileged to work alongside an exceptional team of
                  governors, staff, and parents who share a common vision: to provide our
                  young men with an education that will prepare them to succeed in this
                  life and the next.
                </p>

                <p>
                  When our founders established this school over a decade ago, they had a
                  simple but profound belief: that Muslim boys deserve access to outstanding
                  education that nurtures both their academic potential and their spiritual
                  growth. This belief remains at the heart of everything we do today.
                </p>

                <p>
                  Our motto, &ldquo;Change The World,&rdquo; is not just a slogan – it is
                  a call to action. We want our students to leave Westwood Boys School not
                  only with excellent qualifications but also with the character, confidence,
                  and conviction to make a positive difference wherever they go.
                </p>

                <p>
                  The Board of Governors is committed to:
                </p>

                <ul>
                  <li>Maintaining the highest standards of academic excellence</li>
                  <li>Ensuring strong Islamic ethos and values across school life</li>
                  <li>Providing a safe, supportive, and inclusive environment</li>
                  <li>Supporting our dedicated staff in their important work</li>
                  <li>Engaging constructively with parents and the wider community</li>
                  <li>Planning for the long-term sustainability and growth of the school</li>
                </ul>

                <p>
                  I encourage all prospective parents to visit our school and experience
                  firsthand the warm, purposeful atmosphere that makes Westwood Boys School
                  special. Our students are a testament to what can be achieved when academic
                  ambition is combined with strong values and caring support.
                </p>

                <p>
                  May Allah bless our school community and guide our young men to become
                  the leaders and changemakers that our Ummah and society need.
                </p>

                <p className="mt-8">
                  Wassalamu Alaikum,
                  <br />
                  <strong className="text-brand-navy">Dr. Abdullah Rahman</strong>
                  <br />
                  <span className="text-text-muted">Chair of Governors</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
