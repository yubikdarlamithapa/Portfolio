import { services, portfolioItems, caseStudies, blogPosts } from "@/lib/data"

type SitemapEntry = {
  url: string
  lastModified: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = "https://yourname.com"

  const staticPages = [
    { url: baseUrl, lastModified: "2026-07-27", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: "2026-07-27", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: "2026-07-27", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: "2026-07-27", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: "2026-07-27", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/skills`, lastModified: "2026-07-27", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/tools`, lastModified: "2026-07-27", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: "2026-07-27", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: "2026-07-27", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: "2026-07-27", changeFrequency: "monthly" as const, priority: 0.7 },
  ]

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.id}`,
    lastModified: "2026-07-27",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const portfolioPages = portfolioItems.map((p) => ({
    url: `${baseUrl}/portfolio/${p.id}`,
    lastModified: "2026-07-27",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const caseStudyPages = caseStudies.map((c) => ({
    url: `${baseUrl}/case-studies/${c.id}`,
    lastModified: "2026-07-27",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...portfolioPages,
    ...caseStudyPages,
    ...blogPages,
  ]
}
