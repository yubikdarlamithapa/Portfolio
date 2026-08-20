import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { SearchNormal, Chart, Share, DocumentText, Cpu, Flag2, Video, ChartSquare, Element4, Global } from '@/lib/iconsax'
import type { Service } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Facebook: Global,
  Search: SearchNormal,
  LineChart: Chart,
  Share2: Share,
  FileText: DocumentText,
  Brain: Cpu,
  Target: Flag2,
  Video,
  BarChart3: ChartSquare,
  Layout: Element4,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || DocumentText
  return (
    <Card className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardContent className="flex h-full flex-col gap-3 p-0">
        <div className="mb-1 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20 transition-all duration-300 group-hover:from-accent group-hover:to-accent/80 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{service.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {service.details.slice(0, 2).map((d) => (
            <span
              key={d}
              className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-accent/25 group-hover:text-foreground"
            >
              {d}
            </span>
          ))}
          {service.details.length > 2 && (
            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
              +{service.details.length - 2}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}