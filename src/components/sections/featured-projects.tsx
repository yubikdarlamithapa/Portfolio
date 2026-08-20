'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Export,
  Filter,
  TrendUp,
  TickCircle,
  Flag2,
  Lamp,
  Profile2User,
  SearchNormal1,
  ShoppingCart,
  Code1,
  Building,
  Cup,
  Chart,
} from '@/lib/iconsax'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { portfolioItems } from '@/lib/data'
import { cn } from '@/lib/utils'

const categories = ['All', ...new Set(portfolioItems.map((item) => item.category))]

const categoryIcons: Record<string, any> = {
  'Meta Ads': Profile2User,
  'Google Ads': TrendUp,
  'Social Media': Profile2User,
  SEO: SearchNormal1,
  'E-commerce': ShoppingCart,
  Technology: Code1,
  'Real Estate': Building,
  Hospitality: Building,
  Restaurant: Cup,
}

const resultsIcons = [TrendUp, TickCircle, Chart]

function CategoryIcon({ category }: { category: string }) {
  const Icon = categoryIcons[category] || Chart
  return <Icon variant="Bold" color="currentColor" className="h-8 w-8" />
}

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real results from real campaigns
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          <Filter className="mr-1 size-4 text-muted-foreground" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-accent/20'
                  : 'border border-border/60 bg-muted/50 text-muted-foreground hover:border-accent/30 hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-purple-500/10 to-accent/10">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-all duration-500 group-hover:scale-150" />
                    <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/25 bg-card/90 text-accent shadow-lg shadow-accent/10 backdrop-blur-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:border-accent/50">
                      <CategoryIcon category={item.category} />
                    </div>

                    <Badge
                      variant="outline"
                      className="absolute left-4 top-4 rounded-full border-accent/20 bg-card/80 text-accent backdrop-blur-sm"
                    >
                      {item.industry}
                    </Badge>
                  </div>

                  <CardContent className="flex flex-col gap-4 p-5">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="default"
                        className="rounded-full bg-gradient-to-r from-primary to-accent text-xs text-white"
                      >
                        {item.category}
                      </Badge>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
                      >
                        View Case
                        <Export className="size-3.5" />
                      </Link>
                    </div>

                    <h3 className="text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex gap-2.5">
                        <Flag2 className="mt-0.5 size-4 shrink-0 text-accent" />
                        <p className="text-sm text-muted-foreground">
                          {item.goal}
                        </p>
                      </div>
                      <div className="flex gap-2.5">
                        <Lamp className="mt-0.5 size-4 shrink-0 text-accent" />
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.strategy}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto border-t border-border/60 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {item.results.map((result, i) => {
                          const ResultIcon = resultsIcons[i % resultsIcons.length]
                          return (
                            <span
                              key={result}
                              className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
                            >
                              <ResultIcon className="size-3" />
                              {result}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}