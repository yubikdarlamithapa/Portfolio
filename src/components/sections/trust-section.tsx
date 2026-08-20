'use client'

import { motion } from 'framer-motion'
import { Building, Award, Monitor, Verify } from '@/lib/iconsax'

import { clients, industries, certifications } from '@/lib/data'

const items = [
  {
    icon: Building,
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
    icon: Verify,
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
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20 transition-all duration-300 group-hover:from-accent group-hover:to-accent/80 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {item.label}
                  </span>
                </div>

                <p className="mb-4 text-4xl font-extrabold tracking-tight gradient-text">
                  {item.value}+
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.list.filter(Boolean).slice(0, 4).map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-accent/25 group-hover:text-foreground"
                    >
                      {name!.length > 20 ? `${name!.slice(0, 20)}...` : name}
                    </span>
                  ))}
                  {item.list.length > 4 && (
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                      +{item.list.length - 4} more
                    </span>
                  )}
                </div>
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
                <Building className="size-4" />
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
