"use client"

import Link from "next/link"

export function Hero() {

  return (
    <section className="p-[1.5%] bg-transparent">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <mask id="heroMask" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="black" />
            <path
              d="M0 0.1474 V0.9863 C0 0.9938 0.0038 0.9996 0.0085 0.9996 H0.9912 C0.9958 0.9996 1 0.9863 1 0.9863 V0.0581 C1 0.0506 0.9958 0.0444 0.9912 0.0444 H0.9255 C0.9208 0.0444 0.9165 0.0383 0.9165 0.0307 V0.0149 C0.9165 0.0074 0.9132 0.0013 0.9084 0.0013 L0.2060 0.0000 C0.2012 -0.0000 0.1975 0.0061 0.1975 0.0137 V0.0312 C0.1975 0.0387 0.1936 0.0448 0.1889 0.0448 H0.0915 C0.0868 0.0448 0.0830 0.0510 0.0830 0.0585 V0.1201 C0.0830 0.1276 0.0792 0.1337 0.0745 0.1337 H0.0085 C0.0038 0.1337 0 0.1399 0 0.1474 Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>

      <div className="relative isolate w-full min-h-[calc(100svh-3vh)] sm:min-h-[calc(100svh-3vh)]">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            mask: "url(#heroMask)",
            WebkitMask: "url(#heroMask)",
          }}
        >
          <div className="absolute inset-0 bg-transparent">

          </div>

          <div className="absolute bottom-8 left-6 right-6 z-10 md:bottom-12 md:left-10">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-100/80">
              MKAI AGENCY
            </p>
            <h1 className="mt-3 max-w-4xl text-balance text-3xl/tight tracking-tight text-stone-50 sm:text-4xl/tight md:text-6xl/tight">
GROW YOUR REVENUE WITH DIGITAL AUTOMATION AND AI
            </h1>
            <p className="mt-3 max-w-prose text-sm/6 text-stone-100/85">
              Streamlined processes, faster results, better business.
            </p>
            <Link
              href="/calculator"
              className="mt-4 inline-flex items-center rounded-full border border-stone-400/50 bg-stone-600/10 px-4 py-2 text-sm font-medium text-stone-50 backdrop-blur hover:bg-stone-600/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
            >
              CALCULATE YOUR REVENUE IMPACT
            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}
