"use client"

import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Leadivon", href: "/leadivon" },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 p-4 md:p-6">
      <nav
        className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2"
        aria-label="Primary"
      >
        <Link href="/" aria-label="MKAI Agency home" className="group inline-flex items-center">
          <Image
            src="/mkai-logo-transparent.png"
            alt="MKAI Agency"
            width={562}
            height={455}
            priority
            className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-14"
          />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              prefetch
              className="text-sm font-medium text-stone-100/80 transition-colors duration-150 hover:text-white active:text-stone-400"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
