'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Filter } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { portfolioItems } from '@/lib/data'
import { cn } from '@/lib/utils'

const categories = ['All', ...new Set(portfolioItems.map((item) => item.category))]

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Work
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
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          <Filter className="mr-1 size-4 text-muted-foreground" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
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
                <Card className="group h-full overflow-hidden">
                  <div className="aspect-video w-full bg-gradient-to-br from-primary/10 via-purple-500/10 to-accent/10" />
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="rounded-full text-xs">
                        {item.industry}
                      </Badge>
                      <Badge variant="default" className="rounded-full text-xs">
                        {item.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold leading-tight">
                      {item.title}
                    </h3>

                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Goal
                      </p>
                      <p className="text-sm text-muted-foreground">{item.goal}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Strategy
                      </p>
                      <p className="text-sm text-muted-foreground">{item.strategy}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.results.map((result) => (
                        <span
                          key={result}
                          className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                        >
                          <CheckCircle2 className="size-3" />
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* <Link
                      href={`/portfolio/${item.id}`}
                      className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View Case Study
                      <ArrowUpRight className="ml-1.5 h-4 w-4 shrink-0" />
                    </Link> */}
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
