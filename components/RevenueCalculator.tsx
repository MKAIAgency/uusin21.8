"use client"

import { useCallback, useMemo, useState } from "react"

type SliderConfig = {
  key: string
  label: string
  sublabel?: string
  min: number
  max: number
  step: number
  format: (value: number) => string
}

type ResultCard = {
  label: string
  value: string
  delta?: string
  highlight?: boolean
}

type FunnelStage = {
  stage: string
  count: string
  rate?: string
  width: number
}

type CalcResult = {
  cards: ResultCard[]
  secondary: ResultCard[]
  comparison?: { label: string; today: number; improved: number }
  funnel?: FunnelStage[]
  footnote: string
}

type ServiceConfig = {
  id: string
  name: string
  tagline: string
  sliders: SliderConfig[]
  defaults: Record<string, number>
  compute: (values: Record<string, number>) => CalcResult
}

function formatNumber(value: number) {
  return value.toLocaleString("en-US", { maximumFractionDigits: 0 })
}

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `€${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `€${(value / 1_000).toFixed(1)}k`
  return `€${Math.round(value).toLocaleString("en-US")}`
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`
}

const services: ServiceConfig[] = [
  {
    id: "leadivon-mail",
    name: "Leadivon Mail",
    tagline: "Put leads into automated outreach and see the full reply-rate funnel down to the sale.",
    sliders: [
      { key: "messages", label: "Messages Sent / Month", min: 100, max: 50000, step: 100, format: formatNumber },
      { key: "replyRate", label: "Reply Rate", min: 0.5, max: 40, step: 0.5, format: formatPercent },
      { key: "meetingRate", label: "Reply → Meeting", min: 1, max: 100, step: 1, format: formatPercent },
      { key: "offerRate", label: "Meeting → Offer", min: 1, max: 100, step: 1, format: formatPercent },
      { key: "closeRate", label: "Offer → Close", min: 1, max: 100, step: 1, format: formatPercent },
      { key: "avgValue", label: "Average Deal Value", min: 500, max: 500000, step: 500, format: formatCurrency },
    ],
    defaults: { messages: 2000, replyRate: 5, meetingRate: 30, offerRate: 50, closeRate: 40, avgValue: 8000 },
    compute: (v) => {
      const messages = v.messages
      const replies = messages * (v.replyRate / 100)
      const meetings = replies * (v.meetingRate / 100)
      const offers = meetings * (v.offerRate / 100)
      const closes = offers * (v.closeRate / 100)
      const monthlyRevenue = closes * v.avgValue
      const width = (count: number) => Math.max(4, Math.min(100, (count / Math.max(messages, 1)) * 100))
      return {
        cards: [
          { label: "Closes / Month", value: formatNumber(Math.round(closes)), highlight: true },
          { label: "Meetings / Month", value: formatNumber(Math.round(meetings)) },
          {
            label: "Monthly Revenue",
            value: formatCurrency(monthlyRevenue),
            delta: `+${formatCurrency(monthlyRevenue)}/mo`,
            highlight: true,
          },
          {
            label: "Annual Revenue",
            value: formatCurrency(monthlyRevenue * 12),
            delta: `+${formatCurrency(monthlyRevenue * 12)}/yr`,
            highlight: true,
          },
        ],
        secondary: [],
        funnel: [
          { stage: "Messages", count: formatNumber(Math.round(messages)), width: 100 },
          { stage: "Replies", count: formatNumber(Math.round(replies)), rate: formatPercent(v.replyRate), width: width(replies) },
          { stage: "Meetings", count: formatNumber(Math.round(meetings)), rate: formatPercent(v.meetingRate), width: width(meetings) },
          { stage: "Offers", count: formatNumber(Math.round(offers)), rate: formatPercent(v.offerRate), width: width(offers) },
          { stage: "Closed", count: formatNumber(Math.round(closes)), rate: formatPercent(v.closeRate), width: width(closes) },
        ],
        footnote: "Leadivon Mail works every message from first reply all the way to a closed deal.",
      }
    },
  },
  {
    id: "leadivon-platform",
    name: "Leadivon Platform",
    tagline: "Convert the demand you already have with a fully worked pipeline.",
    sliders: [
      { key: "monthlyLeads", label: "Monthly Leads", min: 10, max: 1000, step: 5, format: formatNumber },
      { key: "avgValue", label: "Average Customer Value", min: 1000, max: 500000, step: 500, format: formatCurrency },
      { key: "closeRate", label: "Current Close Rate", min: 1, max: 100, step: 0.5, format: formatPercent },
      {
        key: "lifecycleCompletion",
        label: "Lead Lifecycle Completion",
        sublabel: "Leads fully worked through your pipeline today",
        min: 0,
        max: 100,
        step: 1,
        format: formatPercent,
      },
    ],
    defaults: { monthlyLeads: 80, avgValue: 12000, closeRate: 6, lifecycleCompletion: 55 },
    compute: (v) => {
      const closeRate = v.closeRate / 100
      const lifecycle = v.lifecycleCompletion / 100
      const baseline = v.monthlyLeads * closeRate * v.avgValue
      const uplift = (1 - lifecycle) * 0.4
      const improvedClose = Math.min(closeRate * (1 + uplift), 0.8)
      const improved = v.monthlyLeads * improvedClose * v.avgValue
      const improvedLifecycle = Math.min(v.lifecycleCompletion + (1 - lifecycle) * 55, 98)
      const additionalMonthly = improved - baseline
      return {
        cards: [
          { label: "Current Monthly Revenue", value: formatCurrency(baseline) },
          { label: "Improved Monthly Revenue", value: formatCurrency(improved), highlight: true },
          {
            label: "Additional Monthly Revenue",
            value: formatCurrency(additionalMonthly),
            delta: `+${formatCurrency(additionalMonthly)}/mo`,
            highlight: true,
          },
          {
            label: "Additional Annual Revenue",
            value: formatCurrency(additionalMonthly * 12),
            delta: `+${formatCurrency(additionalMonthly * 12)}/yr`,
            highlight: true,
          },
        ],
        secondary: [
          {
            label: "Improved Close Rate",
            value: formatPercent(improvedClose * 100),
            delta: `+${(improvedClose * 100 - v.closeRate).toFixed(1)}pp vs today`,
          },
          {
            label: "Pipeline Completion",
            value: formatPercent(improvedLifecycle),
            delta: `+${(improvedLifecycle - v.lifecycleCompletion).toFixed(0)}pp vs today`,
          },
        ],
        comparison: { label: "Lead lifecycle completion", today: v.lifecycleCompletion, improved: improvedLifecycle },
        footnote:
          "Leadivon Platform makes sure every opportunity is worked from first contact to close — no demand wasted.",
      }
    },
  },
  {
    id: "ai-web",
    name: "AI agents / web dev",
    tagline: "Retain customers and convert traffic with AI agents and a high-performing site.",
    sliders: [
      { key: "monthlyVisitors", label: "Monthly Website Visitors", min: 100, max: 100000, step: 100, format: formatNumber },
      { key: "conversionRate", label: "Current Conversion Rate", min: 0.5, max: 25, step: 0.1, format: formatPercent },
      { key: "avgValue", label: "Average Customer Value", min: 500, max: 200000, step: 500, format: formatCurrency },
      {
        key: "retentionRate",
        label: "Current Retention Rate",
        sublabel: "Customers who stay / repeat today",
        min: 0,
        max: 100,
        step: 1,
        format: formatPercent,
      },
    ],
    defaults: { monthlyVisitors: 5000, conversionRate: 2, avgValue: 3000, retentionRate: 50 },
    compute: (v) => {
      const conversion = v.conversionRate / 100
      const retention = v.retentionRate / 100
      const baselineCustomers = v.monthlyVisitors * conversion
      const baseline = baselineCustomers * v.avgValue
      const improvedConversion = Math.min(conversion * 1.6, 0.4)
      const improvedRetention = Math.min(retention + (1 - retention) * 0.5, 0.95)
      const improvedCustomers = v.monthlyVisitors * improvedConversion
      const improved = improvedCustomers * v.avgValue * (1 + improvedRetention * 0.5)
      const additionalMonthly = improved - baseline
      return {
        cards: [
          { label: "Current Monthly Revenue", value: formatCurrency(baseline) },
          { label: "Improved Monthly Revenue", value: formatCurrency(improved), highlight: true },
          {
            label: "Additional Monthly Revenue",
            value: formatCurrency(additionalMonthly),
            delta: `+${formatCurrency(additionalMonthly)}/mo`,
            highlight: true,
          },
          {
            label: "Additional Annual Revenue",
            value: formatCurrency(additionalMonthly * 12),
            delta: `+${formatCurrency(additionalMonthly * 12)}/yr`,
            highlight: true,
          },
        ],
        secondary: [
          {
            label: "Improved Conversion Rate",
            value: formatPercent(improvedConversion * 100),
            delta: `+${(improvedConversion * 100 - v.conversionRate).toFixed(1)}pp vs today`,
          },
          {
            label: "New Customers / Month",
            value: `+${formatNumber(improvedCustomers - baselineCustomers)}`,
            delta: "from AI + optimized site",
          },
        ],
        comparison: { label: "Customer retention", today: v.retentionRate, improved: improvedRetention * 100 },
        footnote:
          "AI agents and a high-converting site keep customers engaged, supported, and coming back for more.",
      }
    },
  },
]

export const serviceIds = services.map((s) => s.id)

export function RevenueCalculator({ serviceId }: { serviceId?: string }) {
  const [activeId, setActiveId] = useState(serviceId ?? services[0].id)
  const availableServices = serviceId ? services.filter((s) => s.id === serviceId) : services
  const active = services.find((s) => s.id === activeId) ?? services[0]

  const [valuesByService, setValuesByService] = useState<Record<string, Record<string, number>>>(() =>
    Object.fromEntries(services.map((s) => [s.id, { ...s.defaults }])),
  )
  const values = valuesByService[active.id]

  const setValue = useCallback(
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(event.target.value)
      setValuesByService((prev) => ({ ...prev, [active.id]: { ...prev[active.id], [key]: next } }))
    },
    [active.id],
  )

  const results = useMemo(() => active.compute(values), [active, values])

  return (
    <div className="space-y-6">
      <style>{`
        .roi-slider { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; cursor: pointer; opacity: 0; z-index: 20; }
        .roi-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; }
        .roi-slider::-moz-range-thumb { width: 16px; height: 16px; border: none; }
      `}</style>

      {/* Service selector */}
      {availableServices.length > 1 && (
      <div className="flex flex-wrap gap-2">
        {availableServices.map((service) => {
          const isActive = service.id === active.id
          return (
            <button
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-white/60 bg-white/15 text-white"
                  : "border-white/15 bg-zinc-950/40 text-stone-300 hover:border-white/30 hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {service.name}
            </button>
          )
        })}
      </div>
      )}
      <p className="text-sm text-stone-200/80">{active.tagline}</p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-300">Your numbers</p>
          <div className="mt-8 space-y-7">
            {active.sliders.map((slider) => {
              const value = values[slider.key]
              const progress = ((value - slider.min) / (slider.max - slider.min)) * 100
              return (
                <div key={slider.key}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-sm text-stone-100">{slider.label}</p>
                      {slider.sublabel && <p className="mt-0.5 text-xs text-stone-400">{slider.sublabel}</p>}
                    </div>
                    <p className="font-mono text-sm font-bold tabular-nums text-white">{slider.format(value)}</p>
                  </div>
                  <div className="relative mt-3 h-4">
                    <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-white/60" style={{ width: `${progress}%` }} />
                    </div>
                    <div
                      className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-stone-300 bg-white"
                      style={{ left: `${progress}%` }}
                    />
                    <input
                      type="range"
                      className="roi-slider"
                      min={slider.min}
                      max={slider.max}
                      step={slider.step}
                      value={value}
                      onChange={setValue(slider.key)}
                      aria-label={slider.label}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-[10px] text-stone-500">
                    <span>{slider.format(slider.min)}</span>
                    <span>{slider.format(slider.max)}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Results */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-300">Estimated Impact</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {results.cards.map((card) => (
              <div
                key={card.label}
                className={`rounded-xl border p-5 ${
                  card.highlight ? "border-white/25 bg-white/10" : "border-white/10 bg-zinc-950/40"
                }`}
              >
                <p className={`text-xs ${card.highlight ? "text-stone-300" : "text-stone-400"}`}>{card.label}</p>
                <p className="mt-3 font-mono text-2xl tabular-nums text-white">{card.value}</p>
                {card.delta && <p className="mt-1 font-mono text-xs text-emerald-400">{card.delta}</p>}
              </div>
            ))}
          </div>

          {results.funnel && (
            <>
              <div className="my-6 h-px w-full bg-white/10" />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-300">Outreach funnel</p>
              <div className="mt-5 space-y-4">
                {results.funnel.map((stage) => (
                  <div key={stage.stage}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-stone-100">{stage.stage}</span>
                      <div className="text-right">
                        <span className="font-mono text-sm font-bold tabular-nums text-white">{stage.count}</span>
                        {stage.rate && <span className="ml-2 text-[11px] text-stone-400">{stage.rate}</span>}
                      </div>
                    </div>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white/70"
                        style={{ width: `${stage.width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {results.secondary.length > 0 && (
            <>
              <div className="my-6 h-px w-full bg-white/10" />
              <div className="grid grid-cols-2 gap-4">
                {results.secondary.map((card) => (
                  <div key={card.label} className="rounded-xl border border-white/10 bg-zinc-950/40 p-5">
                    <p className="text-xs text-stone-400">{card.label}</p>
                    <p className="mt-3 font-mono text-2xl tabular-nums text-white">{card.value}</p>
                    {card.delta && <p className="mt-1 font-mono text-xs text-emerald-400">{card.delta}</p>}
                  </div>
                ))}
              </div>
            </>
          )}

          {results.comparison && (
            <div className="mt-8 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span>Today · {results.comparison.label}</span>
                  <span className="font-mono tabular-nums">{formatPercent(results.comparison.today)}</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-stone-400" style={{ width: `${results.comparison.today}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs text-stone-300">
                  <span>{active.name}</span>
                  <span className="font-mono tabular-nums">{formatPercent(results.comparison.improved)}</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-white/80" style={{ width: `${results.comparison.improved}%` }} />
                </div>
              </div>
            </div>
          )}

          <p className="mt-8 text-center text-xs leading-5 text-stone-400">{results.footnote}</p>
        </div>
      </div>
    </div>
  )
}
