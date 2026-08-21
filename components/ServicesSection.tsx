import Link from "next/link"
import { ArrowUpRight, Workflow, Users, Blocks } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

const services = [
  {
    icon: Workflow,
    title: "Leadivon Mail",
    href: "/services/leadivon-mail",
    text: "Automate personalised email outreach and follow-up so every lead gets the right message at the right time.",
  },
  {
    icon: Users,
    title: "Leadivon Platform",
    href: "/leadivon",
    text: "Turn more conversations into qualified opportunities and convert the demand you already have into booked calls.",
  },
  {
    icon: Blocks,
    title: "AI agents / web dev",
    href: "/services/ai-web",
    text: "Build intelligent AI agents and high-converting websites that keep customers engaged, supported, and coming back.",
  },
]

export function ServicesSection() {
  return (
    <ScrollReveal>
      <section id="services" className="scroll-mt-20 border-y border-white/10 bg-transparent px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm md:flex-row md:items-end md:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">What we build</p>
            <h2 className="mt-4 text-4xl tracking-tight md:text-6xl">Digital leverage, made practical.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-stone-100/90">
            Strategy is only useful when it becomes a system your team can use every day.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map(({ icon: Icon, title, href, text }) => (
            <Link
              key={title}
              href={href}
              prefetch
              className="group flex flex-col rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm transition-colors hover:border-stone-400/50 md:p-8"
            >
              <Icon className="h-6 w-6 text-stone-400" />
              <h3 className="mt-12 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-200/80">{text}</p>
              <ArrowUpRight className="mt-8 h-5 w-5 text-stone-200/65 transition group-hover:text-stone-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  )
}
