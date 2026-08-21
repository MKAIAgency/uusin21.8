import type { Metadata } from "next"
import { Hero } from "@/components/Hero"
import { SiteSections } from "@/components/SiteSections"
import { SiteHeader } from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "MKAI Agency | Digital Automation & AI for Revenue Growth",
  description:
    "Grow your revenue with digital automation and AI. MKAI Agency builds lead engines, AI agents, and connected systems that turn disconnected tools into a predictable growth engine.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MKAI Agency | Digital Automation & AI for Revenue Growth",
    description:
      "Grow your revenue with digital automation and AI. Leadivon Mail, Leadivon Platform, and AI agents that turn disconnected tools into a growth engine.",
    url: "/",
  },
}

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen bg-transparent">
      <SiteHeader />
      <div className="relative z-10">
        <Hero />
        <SiteSections />
      </div>
    </div>
  )
}
