// import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

export function PrincipalsWelcomeSection() {
  return (
    <Section background="white" padding="lg">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Image — commented out until principal photo is available
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/principal.jpg"
                alt="School Principal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-navy/5 rounded-3xl -z-10" />
          </div>
          */}

          {/* Content */}
          <div>
            <span className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-4">
              Welcome Message
            </span>
            <h2 className="font-serif text-h2 text-brand-navy mb-6">
              Welcome from the Principal
            </h2>

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

            <div className="flex items-center gap-4 mb-8">
              <div>
                <div className="font-serif font-semibold text-brand-navy text-lg">
                  Kamal Uddin Khan
                </div>
                <div className="text-text-muted text-sm">Principal</div>
              </div>
            </div>

            <Button variant="default" size="lg" asChild>
              <Link href="/about/welcome" className="group">
                Read Full Welcome
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
