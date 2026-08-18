import Link from "next/link"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { portfolioItems } from "@/lib/data"
import { ArrowLeft, ArrowRight, Target, Lightbulb, AlertTriangle, BarChart3, BookOpen } from "lucide-react"

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ id: p.id }))
}

export default function PortfolioDetailPage({ params }: { params: { id: string } }) {
  const project = portfolioItems.find((p) => p.id === params.id)
  if (!project) notFound()

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Link href="/portfolio" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary">{project.category}</Badge>
                <Badge variant="outline">{project.industry}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.goal}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center p-8">
                <BarChart3 className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">Project Screenshot Placeholder</p>
              </div>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {project.metrics && (
              <FadeIn>
                <h2 className="text-2xl font-bold mb-4">Key Results</h2>
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <Card key={i}>
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </FadeIn>
            )}
            <FadeIn>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" /> Objective
                </h3>
                <p className="text-muted-foreground">{project.goal}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {project.challenge && (
        <SectionWrapper className="bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" /> The Challenge
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.challenge}</p>
            </FadeIn>
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" /> Strategy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.strategy}</p>
          </FadeIn>
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionWrapper>

      {project.lessons && (
        <SectionWrapper className="bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" /> Lessons Learned
              </h2>
              <ul className="space-y-4">
                {project.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </span>
                    <span className="text-muted-foreground">{lesson}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper>
        <div className="text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">Want Results Like This?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let&apos;s discuss how I can apply the same data-driven approach to your business.</p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"><Link href="/contact" className="inline-flex items-center gap-1.5">Start a Project <ArrowRight className="h-4 w-4 shrink-0" /></Link></Button>
          </FadeIn>
        </div>
      </SectionWrapper>

      <CTASection />
    </div>
  )
}
