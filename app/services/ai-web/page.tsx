import type { Metadata } from "next"
import { ServicePage } from "@/components/ServicePage"

export const metadata: Metadata = {
  title: "AI Agents & Web Development — Customer Engagement & Retention",
  description:
    "Build intelligent AI agents and high-converting websites that keep customers engaged, supported, and coming back. Calculate your improved conversion and retention revenue.",
  alternates: { canonical: "/services/ai-web" },
  openGraph: {
    title: "AI Agents / Web Dev | MKAI Agency",
    description:
      "Retain customers and convert traffic with AI agents and a high-performing site. Calculate your improved conversion and retention revenue.",
    url: "/services/ai-web",
  },
}

export default function AiWebPage() {
  return (
    <ServicePage
      service={{
        id: "ai-web",
        name: "AI agents / web dev",
        tagline: "Retain customers and convert traffic with AI agents and a high-performing site.",
        description:
          "AI agents and connected web experiences keep customers engaged, supported, and coming back for more. Build intelligent agents and high-converting websites that work around the clock.",
        benefits: [
          {
            title: "24/7 AI support",
            text: "AI agents respond instantly to customer questions day or night, improving satisfaction and retention.",
          },
          {
            title: "High-converting sites",
            text: "Websites built to convert more of your existing traffic into customers without more ad spend.",
          },
          {
            title: "Connected experiences",
            text: "Every touchpoint across your customer journey works together to build loyalty and repeat revenue.",
          },
        ],
        metadata,
      }}
    />
  )
}
