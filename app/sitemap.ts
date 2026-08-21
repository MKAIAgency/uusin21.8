import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mkaiagency.com"
  const lastModified = new Date()

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/leadivon-mail`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai-web`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leadivon`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/calculator`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/references`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
