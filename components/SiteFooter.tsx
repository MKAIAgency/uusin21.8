import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-transparent px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-300">MKAI Agency</p>
          <p className="mt-4 max-w-sm text-2xl tracking-tight">Build the business behind the business.</p>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-200/80">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/calculator" className="hover:text-white">
              Calculator
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <a
              href="https://wa.me/15553128247"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp: +1 (555) 312-8247
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-200/70">
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/references" className="hover:text-white">
              References
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl font-mono text-xs uppercase tracking-[0.2em] text-stone-200/65">
        © 2026 MKAI Agency. Digital automation and AI.
      </p>
    </footer>
  )
}
