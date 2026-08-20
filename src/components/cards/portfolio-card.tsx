import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Chart,
  TrendUp,
  TickCircle,
  Briefcase,
  Global,
  Profile2User,
  SearchNormal1,
  Diagram,
  ShoppingCart,
  Code1,
  Monitor,
  Building,
  Cup,
  Export,
  Flag2,
  Lamp,
} from '@/lib/iconsax'
import type { PortfolioItem } from '@/types'

interface PortfolioCardProps {
  item: PortfolioItem
}

const categoryIcons: Record<string, React.ElementType> = {
  'Paid Advertising': TrendUp,
  'Social Media': Profile2User,
  SEO: SearchNormal1,
  Analytics: Chart,
  'Google Ads': TrendUp,
  'Meta Ads': Profile2User,
  'E-commerce': ShoppingCart,
  'Digital Marketing': Monitor,
  Strategy: Diagram,
  'Web Marketing': Global,
  Technology: Code1,
  Marketing: Briefcase,
  'Real Estate': Building,
  Restaurant: Cup,
  Hospitality: Building,
}

const resultsIcons = [TrendUp, TickCircle, Chart]

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const Icon = categoryIcons[item.category] || Chart

  return (
    <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
      <div className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Portfolio Visual */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-purple-500/10 to-accent/10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-all duration-500 group-hover:scale-150" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/25 bg-card/90 text-accent shadow-lg shadow-accent/10 backdrop-blur-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:border-accent/50">
          <Icon variant="Bold" color="currentColor" className="h-8 w-8" />
        </div>

        <Badge
          variant="outline"
          className="absolute left-4 top-4 rounded-full border-accent/20 bg-card/80 text-accent backdrop-blur-sm"
        >
          {item.industry}
        </Badge>
      </div>

      {/* Content */}
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between">
          <Badge className="rounded-full bg-gradient-to-r from-primary to-accent text-xs text-white">
            {item.category}
          </Badge>
          <span className="inline-flex -translate-x-1 items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            View Case
            <Export className="size-3.5" />
          </span>
        </div>

        <h3 className="text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
          {item.title}
        </h3>

        <div className="flex gap-2.5">
          <Flag2 className="mt-0.5 size-4 shrink-0 text-accent" />
          <p className="flex-1 text-sm text-muted-foreground line-clamp-2">
            {item.goal}
          </p>
        </div>

        <div className="flex gap-2.5">
          <Lamp className="mt-0.5 size-4 shrink-0 text-accent" />
          <p className="flex-1 text-sm text-muted-foreground line-clamp-2">
            {item.strategy}
          </p>
        </div>

        <div className="mt-auto border-t border-border/60 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {item.results.slice(0, 3).map((result, i) => {
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
  )
}