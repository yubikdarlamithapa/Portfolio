'use client'

import { motion } from 'framer-motion'
import { Building2, Award, Monitor, BadgeCheck } from 'lucide-react'

import { clients, industries, certifications } from '@/lib/data'

const items = [
  {
    icon: Building2,
    label: 'Clients Worked With',
    value: clients.length,
    list: clients,
  },
  {
    icon: Monitor,
    label: 'Industries Served',
    value: industries.length,
    list: industries,
  },
  {
    icon: Award,
    label: 'Certifications',
    value: certifications.length,
    list: certifications.map((c) => c.title || c.name || ''),
  },
  {
    icon: BadgeCheck,
    label: 'Marketing Platforms',
    value: 6,
    list: ['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'TikTok Ads', 'Google Analytics', 'HubSpot'],
  },
]

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted By
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </span>
              </div>
              <p className="mb-3 text-3xl font-bold">{item.value}+</p>
              <div className="flex flex-wrap gap-1.5">
                {item.list.filter(Boolean).slice(0, 4).map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {name!.length > 20 ? `${name!.slice(0, 20)}...` : name}
                  </span>
                ))}
                {item.list.length > 4 && (
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                    +{item.list.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 overflow-hidden"
        >
          <div className="flex animate-[scroll_30s_linear_infinite] gap-8">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Building2 className="size-4" />
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
