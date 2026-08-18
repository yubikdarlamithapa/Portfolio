'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, LineChart, Share2, FileText, Brain, Target, Video, BarChart3, Layout, Globe, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/section-heading'
import { services } from '@/lib/data'

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

export function ServicesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What I Do"
          description="Comprehensive digital marketing services tailored to your business goals"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="group p-6 h-full flex flex-col">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground flex-1">{service.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.details.slice(0, 3).map((detail) => (
                      <Badge key={detail} variant="primary">{detail}</Badge>
                    ))}
                    {service.details.length > 3 && (
                      <Badge variant="outline">+{service.details.length - 3}</Badge>
                    )}
                  </div>
                  <Button variant="link" size="sm" asChild>
                    {/* <Link href={service.href || `/services/${service.id || service.slug || ''}`}>
                       Learn More <ArrowRight className="ml-1.5 h-4 w-4 shrink-0" />
                    </Link> */}
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
