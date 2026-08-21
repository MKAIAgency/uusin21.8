"use client"

import { useState } from "react"
import { Check, Mail, MessageCircle } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New inquiry from ${form.name || "website"}`
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n")
    window.location.href = `mailto:info@mkaiagency.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const field =
    "mt-2 w-full rounded-xl border border-white/15 bg-zinc-950/40 px-4 py-3 text-sm text-white placeholder:text-stone-400 outline-none transition-colors focus:border-stone-400/60"

  return (
    <ScrollReveal>
      <section id="contact" className="scroll-mt-20 bg-transparent px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            {/* Left: intro + contact details */}
            <div className="flex flex-col justify-center">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Contact</p>
              <h1 className="mt-4 text-balance text-4xl tracking-tight text-white md:text-5xl">
                Let&apos;s talk about your growth.
              </h1>
              <p className="mt-5 text-stone-200/80">
                Tell us where you want to go and we&apos;ll map the automation and AI to get you there.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@mkaiagency.com"
                  className="inline-flex items-center gap-2.5 text-sm text-stone-100 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-stone-400" />
                  info@mkaiagency.com
                </a>
                <br />
                <a
                  href="https://wa.me/15553128247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-stone-100 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-stone-400" />
                  WhatsApp: +1 (555) 312-8247
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-center">
                  <Check className="h-6 w-6 text-emerald-400" />
                  <p className="mt-4 text-lg text-white">Thanks, {form.name || "there"}.</p>
                  <p className="mt-2 text-sm leading-6 text-stone-200/80">
                    Your message is on its way to us. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="text-sm text-stone-200/80">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className={field}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-sm text-stone-200/80">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@acme.com"
                        className={field}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-sm text-stone-200/80">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you're looking to automate..."
                      className={`${field} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-stone-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white active:scale-[0.99]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
