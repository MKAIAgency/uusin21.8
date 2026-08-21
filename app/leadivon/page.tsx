import type { Metadata } from "next"
import { MessageSquare, GitBranch, Database, Workflow } from "lucide-react"
import { SectionPageShell } from "@/components/SectionPageShell"
import { LeadivonTrialForm } from "@/components/LeadivonTrialForm"
import { RevenueCalculator } from "@/components/RevenueCalculator"

export const metadata: Metadata = {
  title: "Leadivon — Lead Management & Sales Engagement Software",
  description:
    "One platform to manage leads, engage customers, and close deals with AI. Automated outreach, pipeline management, unified customer database, and intelligent workflows. Start your free trial.",
  alternates: { canonical: "/leadivon" },
  openGraph: {
    title: "Leadivon | Lead Management & Sales Engagement Software",
    description:
      "One platform to manage leads, engage customers, and close deals — powered by AI. Start your free trial today.",
    url: "/leadivon",
  },
}

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered Messaging",
    text: "Engage leads across email, SMS, and messaging platforms with intelligent, context-aware responses.",
  },
  {
    icon: GitBranch,
    title: "Pipeline & Deal Management",
    text: "Visual pipeline with AI-assisted qualification, automated follow-ups, and smart task assignment.",
  },
  {
    icon: Database,
    title: "Unified Customer Database",
    text: "All interactions and data in one place, synced in real time across every channel.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    text: "Intelligent sequences that respond to customer behaviors and nurture relationships on autopilot.",
  },
]

export default function LeadivonPage() {
  return (
    <SectionPageShell>
      {/* Hero */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">
            Lead Management & Sales Engagement Software
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl tracking-tight text-white md:text-7xl">Leadivon</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100/90">
            One platform to manage leads, engage customers, and close deals — powered by AI.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-stone-300">See it in action</p>
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/30 backdrop-blur-sm">
            <div style={{ position: "relative", paddingBottom: "54.43548387096774%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/9f258744af20459295824b1f7505d903"
                title="Leadivon in action"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits + Trial form */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-white/15 bg-zinc-950/30 p-5 backdrop-blur-sm"
              >
                <Icon className="h-6 w-6 text-stone-400" />
                <h2 className="mt-6 text-xl text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-stone-200/80">{text}</p>
              </article>
            ))}
          </div>
          <LeadivonTrialForm />
        </div>
      </section>

      {/* ROI calculator */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Calculate your ROI</p>
            <h2 className="mt-3 text-3xl tracking-tight text-white md:text-5xl">
              See what Leadivon could unlock for your pipeline.
            </h2>
          </div>
          <RevenueCalculator />
        </div>
      </section>
    </SectionPageShell>
  )
}
