import type { Metadata } from "next"
import { SectionPageShell } from "@/components/SectionPageShell"
import { CalculatorSection } from "@/components/CalculatorSection"

export const metadata: Metadata = {
  title: "Revenue Calculator — Estimate Your Automation ROI",
  description:
    "Calculate the revenue impact of automation across lead generation, lead value optimization, and customer retention. See what MKAI Agency could unlock for your pipeline.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: "Revenue Calculator | MKAI Agency",
    description: "Estimate the revenue impact of automation across each MKAI service.",
    url: "/calculator",
  },
}

export default function CalculatorPage() {
  return (
    <SectionPageShell>
      <CalculatorSection />
    </SectionPageShell>
  )
}
