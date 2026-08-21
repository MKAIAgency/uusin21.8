import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export function SectionPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="relative min-h-screen bg-transparent">
      <SiteHeader />
      <div className="relative z-10">
        <div className="px-6 pt-28 md:px-10 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-stone-200/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
        {children}
        <SiteFooter />
      </div>
    </div>
  )
}
