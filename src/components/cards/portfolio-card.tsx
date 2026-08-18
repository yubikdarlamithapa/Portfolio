import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { PortfolioItem } from '@/types'

interface PortfolioCardProps {
  item: PortfolioItem
  index?: number
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Card className="h-full overflow-hidden group">
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <span className="text-4xl">📊</span>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="primary" className="text-xs">{item.category}</Badge>
          <Badge variant="outline" className="text-xs">{item.industry}</Badge>
        </div>
        <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-xs text-muted-foreground mb-3">{item.goal}</p>
        <div className="flex flex-wrap gap-1">
          {item.results.map((r) => (
            <Badge key={r} variant="accent" className="text-xs">{r}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
