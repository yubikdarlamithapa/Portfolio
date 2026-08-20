"use client"

import { useState } from "react"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import PortfolioCard from "@/components/cards/portfolio-card"
import { CTASection } from "@/components/sections/cta-section"
import { portfolioItems } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Filter } from "@/lib/iconsax"
import { cn } from "@/lib/utils"

const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">My Work</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                My <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real campaigns, real results. Browse through my portfolio of data-driven marketing projects across industries and platforms.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-premium">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Filter className="mr-1 size-4 text-muted-foreground" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                    activeCategory === cat
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-accent/20"
                      : "border border-border/60 bg-muted/50 text-muted-foreground hover:border-accent/30 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.05}>
                <Link href={`/portfolio/${item.id}`} className="block h-full">
                  <PortfolioCard item={item} />
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