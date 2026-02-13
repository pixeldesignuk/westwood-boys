import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Section, Container } from '@/components/ui/section'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <Section background="slate" padding="lg">
      <Container>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <span className="font-serif text-[10rem] font-bold text-brand-navy/10">
              404
            </span>
          </div>
          <h1 className="font-serif text-h1 text-brand-navy mb-4">
            Page Not Found
          </h1>
          <p className="text-body-lg text-text-muted max-w-md mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            It might have been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="/">
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <ArrowLeft className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
