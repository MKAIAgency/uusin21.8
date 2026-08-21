import sharp from "sharp"

const SRC = "public/mkai-agency-logo.png"
const OUT = "public/mkai-logo-transparent.png"

// luminance threshold: pixels darker than this become fully transparent,
// brighter pixels ramp up to opaque. Kills the grainy dark gradient background.
const LO = 0.4
const HI = 0.72

const img = sharp(SRC).ensureAlpha()
const { width, height } = await img.metadata()
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
const ch = info.channels

const out = Buffer.alloc(data.length)
for (let i = 0; i < data.length; i += ch) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  let a = (lum - LO) / (HI - LO)
  a = Math.max(0, Math.min(1, a))
  // push the light artwork toward a clean off-white so it reads on the video
  out[i] = 231
  out[i + 1] = 229
  out[i + 2] = 228
  out[i + 3] = Math.round(a * 255)
}

await sharp(out, { raw: { width, height, channels: ch } })
  .png()
  .trim({ threshold: 1 })
  .toFile(OUT)

console.log("[v0] wrote", OUT)
