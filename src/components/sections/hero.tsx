import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/mayor.jpg"
        alt="Students with the Mayor"
        fill
        className="object-cover"
        priority
      />

      {/* Desktop: left-heavy horizontal gradient */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(18,31,72,0.75) 0%, rgba(18,31,72,0.45) 50%, rgba(18,31,72,0.15) 100%)",
        }}
      />

      {/* Mobile: top strip for header readability + bottom-heavy gradient for content */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,31,72,0.55) 0%, rgba(18,31,72,0.1) 15%, rgba(18,31,72,0.15) 35%, rgba(18,31,72,0.7) 60%, rgba(18,31,72,0.85) 100%)",
        }}
      />

      {/* Bottom scrim for trust bar (desktop) */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 hidden lg:block"
        style={{
          background:
            "linear-gradient(to top, rgba(18,31,72,0.7) 0%, transparent 100%)",
        }}
      />

      {/* Content — bottom-aligned on mobile, centered on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 pt-48 sm:pb-32 lg:py-40">
        <div className="w-full lg:w-3/5">
          {/* Tagline — 2/5 width on desktop */}
          <div className="mb-3 lg:mb-6 lg:w-2/3">
            <h1
              className="font-serif text-[3.5rem] sm:text-6xl lg:text-[5.5rem] text-white font-semibold tracking-tight leading-[1.05]"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
            >
              Change{" "}
              <br className="lg:hidden" />
              the World
            </h1>
          </div>

          {/* Subheadline — full width of container (3/5) */}
          <p
            className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 lg:mb-10 leading-relaxed"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
          >
            Where faith meets excellence. An independent Muslim secondary school
            nurturing tomorrow&apos;s leaders through academic rigour, character development,
            and Islamic values.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="cta" size="lg" asChild className="lg:!h-14 lg:!px-8 lg:!text-base">
              <Link href="/admissions">
                Book a Visit
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>
            </Button>
            <Button variant="glass-dark" size="lg" asChild className="lg:!h-14 lg:!px-8 lg:!text-base">
              <Link href="/about/welcome">
                Watch Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar — hidden on mobile to free up space, visible md+ */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-4 gap-6 lg:gap-8">
            <TrustItem
              icon="star"
              title="Outstanding"
              subtitle="Ofsted Rating"
            />
            <TrustItem
              icon="users"
              title="Small Classes"
              subtitle="Personalized attention"
            />
            <TrustItem
              icon="heart"
              title="Faith & Values"
              subtitle="Islamic foundation"
            />
            <TrustItem
              icon="award"
              title="British Values"
              subtitle="Preparing citizens"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface TrustItemProps {
  icon: "star" | "users" | "heart" | "award"
  title: string
  subtitle: string
}

function TrustItem({ icon, title, subtitle }: TrustItemProps) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center">
        {icon === "star" && (
          <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {icon === "users" && (
          <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        {icon === "heart" && (
          <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        )}
        {icon === "award" && (
          <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )}
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-white/60">{subtitle}</div>
      </div>
    </div>
  )
}
