import { Resend } from "resend"

export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactPayload = {
  formType?: string
  name?: string
  email?: string
  message?: string
  businessName?: string
  serviceName?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 })
  }

  let data: ContactPayload
  try {
    data = await req.json()
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = (data.name ?? "").trim()
  const email = (data.email ?? "").trim()
  const message = (data.message ?? "").trim()
  const businessName = (data.businessName ?? "").trim()
  const serviceName = (data.serviceName ?? "").trim()
  const formType = (data.formType ?? "contact").trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!name || !emailRegex.test(email)) {
    return Response.json({ error: "Please provide a valid name and email." }, { status: 400 })
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "info@mkaiagency.com"
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"

  let subject: string
  const lines: string[] = []

  if (formType === "trial") {
    subject = `Free trial request - ${businessName || name}`
    lines.push(`First name: ${name}`)
    lines.push(`Business name: ${businessName}`)
    lines.push(`Work email: ${email}`)
    lines.push("", "Please send Leadivon free trial credentials.")
  } else if (formType === "service") {
    subject = `${serviceName || "Service"} inquiry from ${name}`
    lines.push(`Service: ${serviceName}`)
    lines.push(`Name: ${name}`)
    lines.push(`Email: ${email}`)
    lines.push("", message || "I'd like to learn more about this service.")
  } else {
    subject = `New inquiry from ${name}`
    lines.push(`Name: ${name}`)
    lines.push(`Email: ${email}`)
    lines.push("", message || "(no message)")
  }

  const text = lines.join("\n")
  const html = `<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.6;color:#111">${lines
    .map((line) => (line === "" ? "<br/>" : `<p style="margin:0 0 4px">${escapeHtml(line)}</p>`))
    .join("")}</div>`

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return Response.json({ error: "Failed to send message." }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error("[v0] Contact route error:", err)
    return Response.json({ error: "Failed to send message." }, { status: 500 })
  }
}
