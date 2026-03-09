import { Container } from "@/components/ui/section"

export function ComingSoon() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-h2 text-brand-navy mb-4">
            Coming Soon
          </h2>
          <p className="text-body-lg text-text-muted">
            We&apos;re working on this page. Please check back later.
          </p>
        </div>
      </Container>
    </section>
  )
}
