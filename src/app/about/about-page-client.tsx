'use client'

import { Download, Award, BookOpen, Briefcase, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/section-heading'
import { MotionWrapper } from '@/components/animations/motion'
import { siteConfig, timelineEvents, certifications } from '@/lib/data'

export function AboutPageClient() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="text-center space-y-4">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold">
              {siteConfig.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{siteConfig.name}</h1>
            <p className="text-xl text-muted-foreground">{siteConfig.description}</p>
            <p className="text-muted-foreground">{siteConfig.location}</p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <MotionWrapper variant="slide-in-left" className="space-y-6">
              <SectionHeading title="Biography" description="The story behind the marketer" align="left" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 4 years of experience in digital marketing, I&apos;ve helped businesses
                  across e-commerce, real estate, hospitality, and technology sectors achieve
                  measurable growth through data-driven strategies.
                </p>
                <p>
                  My journey began in analytics, where I developed a deep appreciation for the
                  power of data in decision-making. This foundation evolved into expertise in
                  paid advertising, SEO, content strategy, and AI-powered marketing.
                </p>
                <p>
                  Today, I specialize in Meta Ads and Google Ads, managing substantial ad spend
                  while delivering consistent 3x+ ROAS for my clients.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="slide-in-right" className="space-y-6">
              <SectionHeading title="Marketing Philosophy" align="left" />
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Data-First Approach', desc: 'Every decision is backed by data. No guesswork, just proven strategies.' },
                  { icon: BookOpen, title: 'Continuous Learning', desc: 'Digital marketing evolves daily. I stay ahead of trends and algorithm changes.' },
                  { icon: Briefcase, title: 'ROI Obsession', desc: 'Every campaign exists to drive business results, not vanity metrics.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Professional Journey" description="Career timeline" />
          <div className="mt-12 mx-auto max-w-2xl">
            <div className="relative border-l border-border ml-6">
              {timelineEvents.map((event, i) => (
                <MotionWrapper
                  key={event.year}
                  variant="fade-up"
                  delay={i * 0.1}
                  className="mb-10 ml-8 last:mb-0"
                >
                  <div className="absolute -left-[1.85rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <Badge variant="primary" className="mb-2">{event.year}</Badge>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Certifications" description="Professional credentials" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <MotionWrapper key={cert.title} variant="fade-up" delay={i * 0.05}>
                <Card className="p-6 h-full">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer} &middot; {cert.date}</p>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading title="Download My Resume" description="Get the full picture of my experience and skills" />
          <Button variant="primary" size="lg" asChild>
            <a href="#" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
