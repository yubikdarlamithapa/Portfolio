import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, LineChart, Share2, FileText, Brain, Target, Video, BarChart3, Layout, Globe } from 'lucide-react'
import type { Service } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Facebook: Globe,
  Search,
  LineChart,
  Share2,
  FileText,
  Brain,
  Target,
  Video,
  BarChart3,
  Layout,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || FileText
  return (
    <Card className="h-full">
      <CardContent className="p-5 flex flex-col gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-bold">{service.title}</h3>
        <p className="text-sm text-muted-foreground flex-1">{service.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {service.details.slice(0, 2).map((d) => (
            <Badge key={d} variant="primary" className="text-xs">{d}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
