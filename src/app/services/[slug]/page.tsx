import Link from "next/link"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceCard } from "@/components/cards/service-card"
import { CTASection } from "@/components/sections/cta-section"
import { services } from "@/lib/data"
import { CheckCircle2, ArrowLeft } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Facebook: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Search: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  TrendingUp: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Share2: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  FileText: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  Brain: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 0-4 4v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4Z"/><path d="M8 14v-2a4 4 0 0 1 8 0v2"/><path d="M8 14H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3"/><path d="M16 14h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3"/><path d="M9 22v-4h6v4"/></svg>,
  Target: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Video: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  BarChart3: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  Layout: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug)
  if (!service) notFound()

  const related = services.filter((s) => s.id !== params.slug).slice(0, 3)

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {iconMap[service.icon] || null}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground">{service.description}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper>
        <FadeIn><h2 className="text-2xl font-bold mb-8">What&apos;s Included</h2></FadeIn>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {service.details.map((detail, i) => (
            <FadeIn key={i}>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{detail}</span>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {related.length > 0 && (
        <SectionWrapper className="bg-muted/30">
          <FadeIn><h2 className="text-2xl font-bold text-center mb-8">Related Services</h2></FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {related.map((s) => (
              <FadeIn key={s.id}>
                <Link href={`/services/${s.id}`} className="block h-full">
                  <ServiceCard service={s} />
                </Link>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>
      )}

      <CTASection />
    </div>
  )
}
