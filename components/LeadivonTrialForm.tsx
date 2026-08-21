"use client"

import { useState } from "react"
import { Check, MessageCircle } from "lucide-react"

export function LeadivonTrialForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({ firstName: "", businessName: "", email: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "trial",
          name: form.firstName,
          businessName: form.businessName,
          email: form.email,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong.")
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setSending(false)
    }
  }

  const field =
    "mt-2 w-full rounded-xl border border-white/15 bg-zinc-950/40 px-4 py-3 text-sm text-white placeholder:text-stone-400 outline-none transition-colors focus:border-stone-400/60"

  return (
    <div className="rounded-2xl border border-white/15 bg-zinc-950/30 p-6 backdrop-blur-sm md:p-8">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">Start your free trial</p>
        <h3 className="mt-4 text-3xl tracking-tight text-white md:text-4xl">Get instant access.</h3>
        <p className="mt-3 text-sm leading-6 text-stone-200/80">No credit card required.</p>
      </div>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-center">
          <Check className="h-6 w-6 text-emerald-400" />
          <p className="mt-4 text-lg text-white">You&apos;re on the list, {form.firstName || "there"}.</p>
          <p className="mt-2 text-sm leading-6 text-stone-200/80">
            Login credentials will be sent to {form.email || "your email"} within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="text-sm text-stone-200/80">
                First Name
              </label>
              <input
                id="firstName"
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="Jane"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="businessName" className="text-sm text-stone-200/80">
                Business Name
              </label>
              <input
                id="businessName"
                required
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                placeholder="Acme Inc."
                className={field}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-stone-200/80">
              Work Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@acme.com"
              className={field}
            />
          </div>
          {error ? (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-stone-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending..." : "Start Free Trial"}
          </button>
          <div className="space-y-1 text-center">
            <p className="text-xs text-stone-300">No credit card required · Cancel any time</p>
            <p className="text-xs text-stone-400">Login credentials sent to your email within 24 hours.</p>
            <a
              href="https://wa.me/15553128247"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs text-stone-200 transition-colors hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5 text-stone-400" />
              WhatsApp: +1 (555) 312-8247
            </a>
          </div>
        </form>
      )}
    </div>
  )
}
