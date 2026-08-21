import { RevenueCalculator } from "@/components/RevenueCalculator"
import { ScrollReveal } from "@/components/ScrollReveal"

export function CalculatorSection() {
  return (
    <ScrollReveal>
      <section id="demo" className="scroll-mt-20 bg-transparent px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm md:p-10">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Make the next move</p>
            <h2 className="mt-4 text-4xl tracking-tight md:text-6xl">Calculate your revenue impact.</h2>
            <p className="mt-5 text-stone-200/80">
              Start with a simple estimate. Then let&apos;s turn the opportunity into an operating system.
            </p>
          </div>
          <RevenueCalculator />
        </div>
      </section>
    </ScrollReveal>
  )
}
