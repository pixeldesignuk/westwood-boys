import type { Metadata } from "next"
import { PageHero, ComingSoon } from "@/components/sections"

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
      <ComingSoon />
    </>
  )
}
