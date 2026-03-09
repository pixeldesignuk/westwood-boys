import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Welcome from the Principal",
  description: "A welcome message from the Principal of Westwood Boys School.",
}

export default function WelcomePage() {
  return (
    <>
      <PageHero
        title="Welcome from the Principal"
        subtitle="Our School"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-4">
              It is a very exciting time for us all at Westwood Boys School. We are keen to see learners thrive in the newest school in the borough.
            </p>

            <p className="text-body text-text-secondary mb-4">
              Not only do we want our pupils to develop strong academic skills to help them access leading further and higher education institutions, we also want them to look back and cherish the memories and friendships that they will develop during their time with us.
            </p>

            <p className="text-body text-text-secondary mb-4">
              Our school aims to grow into a school that is popular with parents and an asset for the local community.
            </p>

            <p className="text-body text-text-secondary mb-4">
              We will build strong partnerships with schools and colleges in the borough to help improve educational outcomes for all children and young people in our town.
            </p>

            <p className="text-body text-text-secondary mb-4">
              I would like to take this opportunity to introduce our new website where you can learn more about our new school.
            </p>

            <p className="text-body text-text-secondary mb-8">
              Please take the time to browse our website and feel free to contact me if you would like to learn more.
            </p>

            <div>
              <div className="font-serif font-semibold text-brand-navy text-lg">
                Kamal Uddin Khan
              </div>
              <div className="text-text-muted text-sm">Principal</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
