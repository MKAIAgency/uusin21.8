import type { Metadata } from "next"
import { SectionPageShell } from "@/components/SectionPageShell"
import { RevenueCalculator } from "@/components/RevenueCalculator"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CtaContactForm } from "@/components/CtaContactForm"

type ServiceDetail = {
  id: string
  name: string
  tagline: string
  description: string
  benefits: { title: string; text: string }[]
  metadata: Metadata
}

export function ServicePage({ service }: { service: ServiceDetail }) {
  return (
    <SectionPageShell>
      <ScrollReveal>
        <section className="px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Service</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl tracking-tight text-white md:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-100/90">{service.tagline}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-200/80">{service.description}</p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <section className="px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 md:grid-cols-3">
              {service.benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="flex flex-col rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm md:p-8"
                >
                  <h2 className="text-xl text-white">{benefit.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-200/80">{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <section className="px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Revenue impact</p>
              <h2 className="mt-4 text-3xl tracking-tight text-white md:text-5xl">
                Calculate your {service.name} ROI.
              </h2>
              <p className="mt-4 text-stone-200/80">
                Adjust the sliders to estimate what {service.name} could unlock for your business.
              </p>
            </div>
            <RevenueCalculator serviceId={service.id} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={240}>
        <section className="px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            <CtaContactForm serviceName={service.name} />
          </div>
        </section>
      </ScrollReveal>
    </SectionPageShell>
  )
}
