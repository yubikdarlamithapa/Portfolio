import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"
import { caseStudies } from "@/lib/data"
import { ArrowRight, TrendingUp } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">Case Studies</Badge>
              <TextReveal text="Case Studies" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                Deep dives into real marketing campaigns — from strategy and execution to measurable results that drove business growth.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study) => {
              const linkSlug = study.slug ?? study.id ?? ''
              return (
                <FadeIn key={linkSlug}>
                  <Link href={`/case-studies/${linkSlug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="primary">{study.industry}</Badge>
                              <Badge variant="outline">{study.client}</Badge>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold mb-3">{study.title}</h2>
                            <p className="text-muted-foreground line-clamp-2 mb-4">{(study.problem || '').slice(0, 200)}...</p>
                            <div className="flex flex-wrap gap-4">
                              {(study.finalResults ?? study.results ?? []).slice(0, 2).map((result, j) => (
                                <span key={j} className="flex items-center gap-1 text-sm font-medium text-accent">
                                  <TrendingUp className="h-3 w-3" /> {result}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="shrink-0 self-start md:mt-2">
                            <Button variant="ghost" size="sm" className="gap-1">
                              Read Case Study <ArrowRight className="h-4 w-4 shrink-0" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
