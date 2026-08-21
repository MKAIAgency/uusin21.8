"use client"

import Link from "next/link"
import { useState } from "react"
import { TrendingUp, Target, Repeat, ArrowUpRight, RotateCcw } from "lucide-react"

const options = [
  {
    id: "leads",
    icon: Target,
    label: "Not enough leads",
    question: "We can't fill the pipeline consistently.",
    service: "Leadivon Mail + Leadivon Platform",
    result: {
      headline: "You need a predictable lead engine.",
      text: "Leadivon builds a consistent, qualified pipeline so growth stops depending on referrals and luck.",
      points: [
        "Sharper positioning that attracts the right buyers",
        "Always-on outreach and qualification",
        "A repeatable path from first touch to booked call",
      ],
    },
  },
  {
    id: "value",
    icon: TrendingUp,
    label: "Lead value optimization",
    question: "We get leads, but too many go cold or convert low.",
    service: "Leadivon Platform",
    result: {
      headline: "You need to convert the demand you already have.",
      text: "Leadimail automates personalised outreach and follow-up so every lead is nurtured to its full value.",
      points: [
        "Automated, personalised follow-up sequences",
        "Right message to the right lead at the right time",
        "Higher conversion without more manual effort",
      ],
    },
  },
  {
    id: "retention",
    icon: Repeat,
    label: "Customer retention",
    question: "We win customers, but struggle to keep them engaged.",
    service: "AI agents / web dev",
    result: {
      headline: "You need systems that keep customers close.",
      text: "AI agents and connected web experiences keep customers engaged, supported, and coming back.",
      points: [
        "AI agents that respond and support around the clock",
        "Connected touchpoints across your customer journey",
        "Experiences that build loyalty and repeat revenue",
      ],
    },
  },
]

export function PainPointQuestionnaire() {
  const [selected, setSelected] = useState<string | null>(null)
  const active = options.find((option) => option.id === selected)

  return (
    <div className="rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm md:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">The growth layer</p>
      <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight text-white md:text-6xl">
        Your business should work as hard as you do.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100/90">
        MKAI Agency helps ambitious businesses replace disconnected tools and manual tasks with digital systems that
        create momentum.
      </p>

      <div className="mt-12 border-t border-white/10 pt-10">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Find your fix</p>
        <h3 className="mt-4 text-3xl tracking-tight text-white md:text-4xl">{"What's your biggest pain point?"}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-200/80">
          Pick the challenge that sounds most like your business and we&apos;ll point you to the right solution.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {options.map(({ id, icon: Icon, label, question }) => {
          const isActive = selected === id
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelected(id)}
              className={`group rounded-2xl border p-6 text-left backdrop-blur-sm transition-colors ${
                isActive
                  ? "border-stone-300/70 bg-white/10"
                  : "border-white/15 bg-zinc-950/40 hover:border-stone-400/50"
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-white" : "text-stone-400"}`} />
              <span className="mt-8 block text-xl text-white">{label}</span>
              <span className="mt-2 block text-sm leading-6 text-stone-200/80">{question}</span>
            </button>
          )
        })}
      </div>

      {active && (
        <div className="mt-6 rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-300">
            Recommended: {active.service}
          </p>
          <h4 className="mt-4 text-2xl tracking-tight text-white md:text-3xl">{active.result.headline}</h4>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-200/80">{active.result.text}</p>
          <ul className="mt-6 space-y-3">
            {active.result.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-6 text-stone-100">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-full border border-stone-400/50 bg-stone-600/10 px-4 py-2 text-sm font-medium text-stone-50 backdrop-blur hover:bg-stone-600/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
            >
              Calculate your revenue impact
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="inline-flex items-center gap-2 text-sm text-stone-200/70 transition hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
