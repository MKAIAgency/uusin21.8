import type { Metadata } from "next"
import { SectionPageShell } from "@/components/SectionPageShell"
import { LeadivonTrialForm } from "@/components/LeadivonTrialForm"
import { CalendlyEmbed } from "@/components/CalendlyEmbed"

export const metadata: Metadata = {
  title: "Tutorial | MKAI Agency",
  description: "Private walkthrough: watch the tutorial, start a free trial, and book a call.",
  robots: { index: false, follow: false },
}

export default function TutorialPage() {
  return (
    <SectionPageShell>
      {/* Header */}
      <section className="px-6 pt-10 md:px-10 md:pt-14">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Private walkthrough</p>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl tracking-tight text-white md:text-6xl">Tutorial</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-100/90">
            Watch the full walkthrough, then start your free trial or book a call to get set up.
          </p>
        </div>
      </section>

      {/* Tutorial video */}
      <section className="px-6 pt-8 md:px-10 md:pt-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Tutorial video</p>
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/30 backdrop-blur-sm">
            <div style={{ position: "relative", paddingBottom: "65.06024096385542%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/38f563f5c99444d7b66045f287a40b78"
                title="MKAI Agency tutorial"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free trial form + Calendly booking */}
      <section className="px-6 pt-10 md:px-10 md:pt-12">
        <div className="mx-auto grid max-w-6xl items-stretch gap-4 lg:grid-cols-2">
          <LeadivonTrialForm />
          <CalendlyEmbed />
        </div>
      </section>
    </SectionPageShell>
  )
}
