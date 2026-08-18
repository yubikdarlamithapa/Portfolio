"use client"

import { useState } from "react"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/sections/cta-section"
import { blogPosts } from "@/lib/data"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const categories = ["All", ...new Set(blogPosts.map((p) => p.category))]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">Blog</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Insights & Articles
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Data-driven marketing insights, strategies, and actionable tips to grow your business.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "border border-border text-muted-foreground hover:border-accent/30 hover:text-accent bg-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((post) => (
              <FadeIn key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="card-premium h-full flex flex-col overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-xs text-muted-foreground">Image Placeholder</p>
                      </div>
                    </div>
                    <CardContent className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="primary" className="text-xs">{post.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </div>
                      </div>
                      <h2 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h2>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </div>
                        <span className="text-xs font-medium text-accent flex items-center gap-1">
                          Read More <ArrowRight className="h-4 w-4 shrink-0" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
