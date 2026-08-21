"use client"

import { useEffect, useRef } from "react"

export function SiteVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const applyPlaybackRate = () => {
      video.playbackRate = 1.35
    }

    applyPlaybackRate()
    video.addEventListener("loadedmetadata", applyPlaybackRate)
    return () => video.removeEventListener("loadedmetadata", applyPlaybackRate)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
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
