export function SiteVideoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-bg-vid-(1).mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-zinc-950/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/35 via-transparent to-zinc-950/55" />
    </div>
  )
}
