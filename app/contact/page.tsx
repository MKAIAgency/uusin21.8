import type { Metadata } from "next"
import { SectionPageShell } from "@/components/SectionPageShell"
import { ContactSection } from "@/components/ContactSection"

export const metadata: Metadata = {
  title: "Contact — Let's Talk About Your Growth",
  description:
    "Tell us where you want to go and we'll map the automation and AI to get you there. Email info@mkaiagency.com or send a message through the form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | MKAI Agency",
    description: "Let's talk about your growth. Tell us where you want to go and we'll map the automation and AI to get you there.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <SectionPageShell>
      <ContactSection />
    </SectionPageShell>
  )
}
