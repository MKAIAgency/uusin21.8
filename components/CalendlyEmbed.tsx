"use client"

import { useEffect, useRef } from "react"

const CALENDLY_URL =
  "https://calendly.com/mkaiagencyinfo/30min?background_color=d1d1d1&primary_color=9574ad"
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js"

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script")
      script.src = SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-zinc-950/30 p-6 backdrop-blur-sm md:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Book a call</p>
      <h3 className="mt-4 text-3xl tracking-tight text-white md:text-4xl">Let&apos;s map out your growth.</h3>
      <p className="mt-3 text-sm leading-6 text-stone-200/80">
        Pick a time that works and we&apos;ll walk through your setup.
      </p>

      <div className="mt-6 flex-1 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40">
        <div
          ref={containerRef}
          className="calendly-inline-widget"
          data-url={CALENDLY_URL}
          style={{ minWidth: "280px", height: "100%", minHeight: "560px" }}
        />
      </div>
    </div>
  )
}
