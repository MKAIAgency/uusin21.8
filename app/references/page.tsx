import type { Metadata } from "next"
import { ContentPage, ContentSection } from "@/components/ContentPage"

export const metadata: Metadata = {
  title: "References — Client Results & Testimonials",
  description:
    "Real results from businesses that grew with MKAI Agency: 2.1x average reply rate increase, 40% less manual follow-up, and 18% improvement in close rate.",
  alternates: { canonical: "/references" },
  openGraph: {
    title: "References | MKAI Agency",
    description: "Client results and references from businesses that grew with MKAI Agency.",
    url: "/references",
  },
}

const testimonials = [
  {
    quote:
      "MKAI rebuilt our outbound engine end to end. Reply rates doubled and we finally have a predictable pipeline of qualified meetings.",
    name: "Sarah Lindqvist",
    role: "Founder, Northbridge B2B",
  },
  {
    quote:
      "Their automation removed hours of manual follow-up every week. The team now spends time closing instead of chasing.",
    name: "David Okoro",
    role: "Head of Sales, Meridian Group",
  },
  {
    quote:
      "The AI agent they built handles the first response instantly, day or night. Our customers notice the difference and so does our retention.",
    name: "Elena Ferro",
    role: "Operations Director, Casa Verde",
  },
]

const metrics = [
  { value: "2.1x", label: "Average increase in reply rate" },
  { value: "40%", label: "Less manual follow-up work" },
  { value: "18%", label: "Improvement in close rate" },
]

export default function ReferencesPage() {
  return (
    <ContentPage
      eyebrow="Proof"
      title="References"
      intro="A selection of results and words from businesses we have helped grow with digital automation, AI, and connected systems."
    >
      <ContentSection heading="Results at a glance">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map(({ value, label }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-zinc-950/30 p-5">
              <p className="font-mono text-3xl tabular-nums text-white">{value}</p>
              <p className="mt-2 text-sm leading-6 text-stone-200/70">{label}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection heading="What clients say">
        <div className="grid gap-4">
          {testimonials.map(({ quote, name, role }) => (
            <figure key={name} className="rounded-xl border border-white/10 bg-zinc-950/30 p-6">
              <blockquote className="text-lg leading-8 text-stone-100">&ldquo;{quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-stone-200/70">
                <span className="text-white">{name}</span> · {role}
              </figcaption>
            </figure>
          ))}
        </div>
      </ContentSection>

      <ContentSection heading="Want to be our next reference?">
        <p>
          We take on a limited number of engagements so every client gets a system built around their business. If you
          want results like these, email{" "}
          <a href="mailto:info@mkaiagency.com" className="text-white underline underline-offset-4">
            info@mkaiagency.com
          </a>{" "}
          to start a revenue impact conversation.
        </p>
      </ContentSection>
    </ContentPage>
  )
}
