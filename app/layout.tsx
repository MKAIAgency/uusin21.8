import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteVideoBackground } from "@/components/SiteVideoBackground"
import { ChatWidget } from "@/components/ChatWidget"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const siteUrl = "https://mkaiagency.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MKAI Agency | Digital Automation & AI for Revenue Growth",
    template: "%s | MKAI Agency",
  },
  description:
    "MKAI Agency helps ambitious businesses grow revenue with digital automation, AI agents, lead engagement software, and connected systems. Calculate your revenue impact and start a free trial.",
  keywords: [
    "digital automation",
    "AI automation",
    "AI agents",
    "lead generation",
    "lead management",
    "sales engagement",
    "email outreach automation",
    "revenue growth",
    "business automation",
    "Leadivon",
    "web development",
    "AI consulting",
  ],
  authors: [{ name: "MKAI Agency" }],
  creator: "MKAI Agency",
  publisher: "MKAI Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/6463fe17.png", sizes: "any" },
    ],
    shortcut: "/6463fe17.png",
    apple: "/6463fe17.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MKAI Agency",
    title: "MKAI Agency | Digital Automation & AI for Revenue Growth",
    description:
      "Grow your revenue with digital automation and AI. Leadivon Mail, Leadivon Platform, and AI agents that turn disconnected tools into a growth engine.",
    images: [
      {
        url: "/6463fe17.png",
        width: 1200,
        height: 630,
        alt: "MKAI Agency — Digital Automation & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MKAI Agency | Digital Automation & AI for Revenue Growth",
    description:
      "Grow your revenue with digital automation and AI. Leadivon Mail, Leadivon Platform, and AI agents that turn disconnected tools into a growth engine.",
    images: ["/6463fe17.png"],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        <SiteVideoBackground />
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
