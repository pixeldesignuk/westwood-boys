import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Message from the Chair of Governors",
  description: "A message from the Chair of Governors at Westwood Boys School.",
}

export default function ChairsMessagePage() {
  return (
    <>
      <PageHero
        title="Message from the Chair of Governors"
        subtitle="Our School"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-4">
              As someone who grew up and studied in Oldham, it is truly humbling to serve as the Chair of a brand new school.
            </p>

            <p className="text-body text-text-secondary mb-4">
              At Westwood Boys School we aim to build on the success of Westwood High by supporting our learners as they transition through adolescence into adulthood. We want them to grow into their humanity and become invaluable members of modern Britain.
            </p>

            <p className="text-body text-text-secondary mb-4">
              It gives me great joy to learn about the positive impact our school is already having on learners, parents and all members of the school community. The passion and dedication to teaching and learning demonstrated by teachers and learners is truly inspiring. We hope to report back to you in the coming years once learners have sat public examinations.
            </p>

            <p className="text-body text-text-secondary mb-4">
              Our school promotes a strong culture of self-respect and mutual respect and tolerance for people of other faiths and no faith. Our ethos is shaped by our school community. Staff, students and parents feel like we are one big family!
            </p>

            <p className="text-body text-text-secondary mb-4">
              We are still a very small new school and I appreciate the important contribution our parents and local community have made towards our journey so far. I want to thank you for your support and your trust. I want to assure you that our leadership team will strive to make every day special for your child.
            </p>

            <p className="text-body text-text-secondary mb-8">
              Thank you for visiting our school website.
            </p>

            <div>
              <div className="font-serif font-semibold text-brand-navy text-lg">
                Jamal Khan
              </div>
              <div className="text-text-muted text-sm">Chair of Governors</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
