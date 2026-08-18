'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { cn } from '@/lib/utils'

const categories = [
  'All',
  'Paid Advertising',
  'Organic Marketing',
  'Design',
  'Analytics',
]

const categoryColors: Record<string, string> = {
  'Paid Advertising': 'bg-blue-500',
  'Organic Marketing': 'bg-green-500',
  'Design': 'bg-purple-500',
  'Analytics': 'bg-orange-500',
}

export default function SkillsDisplay() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-2xl space-y-5">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                  className={cn('h-full rounded-full', categoryColors[skill.category] || 'bg-primary')}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
