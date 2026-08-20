'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft2, ArrowRight2, Star, QuoteDown, Verify } from '@/lib/iconsax'

import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/lib/data'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(goNext, 4000)
    return () => clearInterval(timer)
  }, [goNext, paused])

  const t = testimonials[current]

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

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
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Testimonials from brands I&apos;ve worked with
          </p>
        </motion.div>

        <div
          className="relative mx-auto max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/60">
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Card className="border-0 bg-transparent text-center">
                    <CardContent className="flex flex-col items-center gap-5 p-8 sm:p-12">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20">
                        <QuoteDown className="size-6" />
                      </div>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>

                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        &ldquo;{t.review}&rdquo;
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-bold text-white ring-2 ring-accent/30">
                            {t.name.charAt(0)}
                          </div>
                          <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
                            <Verify className="size-3" />
                          </span>
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {t.role},{" "}
                            <span className="font-medium text-accent">{t.company}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
              aria-label="Previous testimonial"
            >
              <ArrowLeft2 className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === current
                      ? 'w-6 bg-gradient-to-r from-primary to-accent'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
              aria-label="Next testimonial"
            >
              <ArrowRight2 className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}