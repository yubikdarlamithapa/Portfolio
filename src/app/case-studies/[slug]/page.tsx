import Link from "next/link"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { caseStudies } from "@/lib/data"
import { ArrowLeft, ArrowRight, TrendUp, ChartSquare } from "@/lib/iconsax"

export function generateStaticParams() {
  return caseStudies
    .filter((c): c is typeof c & { id: string } => !!c.id)
    .map((c) => ({ slug: c.id }))
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find((c) => c.id === slug)
  if (!study) notFound()

  const displayResults = study.finalResults ?? study.results ?? []

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Link href="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary">{study.industry}</Badge>
                <Badge variant="outline">{study.client}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{study.title}</h1>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">{study.problem}</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn>
              <h2 className="text-xl font-bold mb-3">Research</h2>
              <p className="text-muted-foreground leading-relaxed">{study.research}</p>
            </FadeIn>
            <FadeIn>
              <h2 className="text-xl font-bold mb-3">Audience</h2>
              <p className="text-muted-foreground leading-relaxed">{study.audience}</p>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">Campaign Structure</h2>
            <p className="text-muted-foreground leading-relaxed">{study.campaignStructure}</p>
          </FadeIn>
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">Creative Strategy</h2>
            <p className="text-muted-foreground leading-relaxed">{study.creativeStrategy}</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <h2 className="text-xl font-bold mb-3">Budget</h2>
              <p className="text-muted-foreground leading-relaxed">{study.budget}</p>
            </FadeIn>
            <FadeIn>
              <h2 className="text-xl font-bold mb-3">Optimisation</h2>
              <p className="text-muted-foreground leading-relaxed">{study.optimisation}</p>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {study.beforeAfter.length > 0 && (
        <SectionWrapper>
          <FadeIn><h2 className="text-2xl font-bold text-center mb-8">Before & After</h2></FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {study.beforeAfter.map((item, i) => (
                <FadeIn key={i}>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-3">{item.label}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-center flex-1">
                          <p className="text-xs text-muted-foreground mb-1">Before</p>
                          <p className="text-lg font-semibold text-muted-foreground line-through">{item.before}</p>
                        </div>
                        <TrendUp className="h-5 w-5 text-accent mx-2" />
                        <div className="text-center flex-1">
                          <p className="text-xs text-muted-foreground mb-1">After</p>
                          <p className="text-lg font-semibold gradient-text">{item.after}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn><h2 className="text-2xl font-bold mb-6">Results</h2></FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayResults.map((result, i) => (
              <FadeIn key={i}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <TrendUp className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <p className="text-muted-foreground">{result}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6">Charts & Visualisations</h2>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="text-center p-8">
                <ChartSquare className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Performance charts and visualisations placeholder</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">Want Results Like This?</h2>
            <p className="text-muted-foreground mb-8">Let&apos;s discuss how I can apply the same strategic approach to your business.</p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"><Link href="/contact" className="inline-flex items-center gap-1.5">Get in Touch <ArrowRight className="h-4 w-4 shrink-0" /></Link></Button>
          </FadeIn>
        </div>
      </SectionWrapper>

      <CTASection />
    </div>
  )
}
