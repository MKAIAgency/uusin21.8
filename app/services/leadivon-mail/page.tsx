import type { Metadata } from "next"
import { ServicePage } from "@/components/ServicePage"

export const metadata: Metadata = {
  title: "Leadivon Mail — Automated Email Outreach & Follow-Up",
  description:
    "Automate personalised email outreach and follow-up so every lead gets the right message at the right time. Calculate your reply-rate funnel from first message to closed deal.",
  alternates: { canonical: "/services/leadivon-mail" },
  openGraph: {
    title: "Leadivon Mail | MKAI Agency",
    description:
      "Automate personalised email outreach and follow-up. See the full reply-rate funnel from first message to closed deal.",
    url: "/services/leadivon-mail",
  },
}

export default function LeadivonMailPage() {
  return (
    <ServicePage
      service={{
        id: "leadivon-mail",
        name: "Leadivon Mail",
        tagline: "Put leads into automated outreach and see the full reply-rate funnel down to the sale.",
        description:
          "Leadivon Mail automates personalised email outreach and follow-up sequences so every lead gets the right message at the right time — without manual effort.",
        benefits: [
          {
            title: "Always-on outreach",
            text: "Automated sequences send the right message at the right time, so no lead is ever left waiting.",
          },
          {
            title: "Personalised at scale",
            text: "Dynamic templates adapt to each recipient, keeping messages relevant without manual writing.",
          },
          {
            title: "Full-funnel visibility",
            text: "Track every stage from messages sent to replies, meetings, offers, and closed deals.",
          },
        ],
        metadata,
      }}
    />
  )
}
