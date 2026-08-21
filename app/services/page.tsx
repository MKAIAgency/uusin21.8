import type { Metadata } from "next"
import { SectionPageShell } from "@/components/SectionPageShell"
import { ServicesSection } from "@/components/ServicesSection"

export const metadata: Metadata = {
  title: "Services — Digital Automation, AI Agents & Lead Engagement",
  description:
    "Leadivon Mail for automated email outreach, Leadivon Platform for lead management and conversion, and AI agents and web development for customer engagement and retention.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — MKAI Agency",
    description:
      "Leadivon Mail, Leadivon Platform, and AI agents / web dev. Digital leverage made practical.",
    url: "/services",
  },
}

export default function ServicesPage() {
  return (
    <SectionPageShell>
      <ServicesSection />
    </SectionPageShell>
  )
}
