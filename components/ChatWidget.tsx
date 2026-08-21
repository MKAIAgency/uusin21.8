"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string }
          url: string
          versionID: string
          voice: { url: string }
        }) => void
      }
    }
  }
}

export function ChatWidget() {
  useEffect(() => {
    if (document.getElementById("voiceflow-widget")) return

    const script = document.createElement("script")
    script.id = "voiceflow-widget"
    script.type = "text/javascript"
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"
    script.onload = () => {
      window.voiceflow?.chat.load({
        verify: { projectID: "68f53764c27758e7becae615" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      })
    }
    const firstScript = document.getElementsByTagName("script")[0]
    firstScript.parentNode?.insertBefore(script, firstScript)
  }, [])

  return null
}
