"use client"

import { motion } from "framer-motion"
import { CountUp } from "@/components/animations/count-up"
import { stats } from "@/lib/data"

export default function ResultsCounter() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Marketing Results
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
            Numbers speak louder than words. Here is the impact I have delivered.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
