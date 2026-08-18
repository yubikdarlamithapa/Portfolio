'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Search,
  ClipboardList,
  Settings,
  Rocket,
  RefreshCw,
  BarChart3,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Research',
    description: 'Deep dive into your market, competitors, and target audience to identify opportunities.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Data-backed marketing plan aligned with your business goals and budget.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Campaign Setup',
    description: 'Pixel installation, audience building, creative development, and platform configuration.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Go-live with carefully structured campaigns and tracking in place.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Optimisation',
    description: 'Daily bid management, A/B testing, audience refinement, and creative rotation.',
    icon: RefreshCw,
  },
  {
    number: '06',
    title: 'Reporting',
    description: 'Transparent weekly reports with actionable insights and KPI tracking.',
    icon: BarChart3,
  },
  {
    number: '07',
    title: 'Scaling',
    description: 'Scale winning campaigns, expand audiences, and increase budget efficiently.',
    icon: TrendingUp,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function ProcessSection() {
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
            How I Work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A proven process that delivers consistent results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="size-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-primary/20">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
