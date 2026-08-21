import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

type ContentPageProps = {
  eyebrow: string
  title: string
  intro: string
  updated?: string
  children: React.ReactNode
}

export function ContentPage({ eyebrow, title, intro, updated, children }: ContentPageProps) {
  return (
    <div id="top" className="relative min-h-screen bg-transparent">
      <SiteHeader />
      <div className="relative z-10">
        <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-200/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-8 rounded-2xl border border-white/15 bg-zinc-950/30 p-6 backdrop-blur-sm md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">{eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl tracking-tight text-white md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl leading-7 text-stone-200/80">{intro}</p>
            {updated && (
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-200/55">
                Last updated: {updated}
              </p>
            )}

            <div className="mt-10 space-y-10 border-t border-white/10 pt-10">{children}</div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

type SectionProps = {
  heading: string
  children: React.ReactNode
}

export function ContentSection({ heading, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-2xl tracking-tight text-white">{heading}</h2>
      <div className="mt-4 space-y-4 leading-7 text-stone-200/80">{children}</div>
    </section>
  )
}
