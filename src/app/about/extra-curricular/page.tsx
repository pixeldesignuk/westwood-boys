import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Extra-Curricular",
  description: "Extra-curricular activities at Westwood Boys School.",
}

export default function ExtraCurricularPage() {
  return (
    <>
      <PageHero
        title="Extra-Curricular"
        subtitle="About"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/extra-curricular-new.png"
                alt="Extra-curricular activities at Westwood Boys School"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-body text-text-secondary">
              We have a number of exciting activities running throughout the year. Check the school noticeboard for the latest clubs and activities.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
