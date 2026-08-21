"use client"

import { useState } from "react"
import { Check, Mail, MessageCircle } from "lucide-react"

export function CtaContactForm({ serviceName }: { serviceName: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `${serviceName} inquiry from ${form.name || "website"}`
    const body = [
      `Service: ${serviceName}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message || "I'd like to learn more about this service.",
    ].join("\n")
    window.location.href = `mailto:info@mkaiagency.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const field =
    "mt-2 w-full rounded-xl border border-white/15 bg-zinc-950/40 px-4 py-3 text-sm text-white placeholder:text-stone-400 outline-none transition-colors focus:border-stone-400/60"

  return (
    <div className="rounded-2xl border border-white/15 bg-zinc-950/40 p-6 backdrop-blur-sm md:p-8">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Get started</p>
        <h3 className="mt-4 text-2xl tracking-tight text-white md:text-3xl">
          Interested in {serviceName}?
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-stone-200/80">
          Send us a message and we&apos;ll show you how it works for your business.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href="mailto:info@mkaiagency.com"
            className="inline-flex items-center gap-2 text-xs text-stone-100 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-stone-400" />
            info@mkaiagency.com
          </a>
          <a
            href="https://wa.me/15553128247"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-stone-100 transition-colors hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5 text-stone-400" />
            WhatsApp: +1 (555) 312-8247
          </a>
        </div>
      </div>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-center">
          <Check className="mx-auto h-6 w-6 text-emerald-400" />
          <p className="mt-4 text-lg text-white">Thanks, {form.name || "there"}.</p>
          <p className="mt-2 text-sm leading-6 text-stone-200/80">
            We&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cta-name" className="text-sm text-stone-200/80">
                Name
              </label>
              <input
                id="cta-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="cta-email" className="text-sm text-stone-200/80">
                Email
              </label>
              <input
                id="cta-email"
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
            <label htmlFor="cta-message" className="text-sm text-stone-200/80">
              Message <span className="text-stone-500">(optional)</span>
            </label>
            <textarea
              id="cta-message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={`Tell us about your ${serviceName} needs...`}
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
  )
}
