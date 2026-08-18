import Link from "next/link"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { blogPosts } from "@/lib/data"
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((bp) => bp.slug !== slug).slice(0, 3)

  const sections = [
    { heading: "Introduction", content: "In the rapidly evolving landscape of digital marketing, staying ahead of the curve is not just an advantage — it's a necessity. This article explores proven strategies and actionable insights that can transform your marketing approach and deliver measurable results." },
    { heading: "Why This Matters", content: "The digital marketing landscape has shifted dramatically in recent years. With AI-powered tools, changing consumer behaviours, and platform algorithm updates, marketers must adapt or risk being left behind. Understanding these shifts is crucial for maintaining competitive advantage." },
    { heading: "Key Strategies", content: "Based on extensive experience managing campaigns across multiple platforms and industries, several key strategies consistently deliver results. These include data-driven audience segmentation, creative testing frameworks, and continuous optimisation cycles that compound over time." },
    { heading: "Implementation Guide", content: "Implementing these strategies requires a systematic approach. Start with a thorough audit of your current marketing operations, identify quick wins, and build a roadmap for long-term improvement. Regular performance reviews and data analysis will guide your optimisation efforts." },
    { heading: "Measuring Success", content: "Success in digital marketing is measured through clear KPIs aligned with business objectives. Whether it's ROAS, CPA, conversion rate, or brand awareness metrics, having a robust measurement framework ensures you're always making data-backed decisions." },
    { heading: "Conclusion", content: "The most successful marketing strategies combine creative excellence with data-driven decision making. By staying informed, testing continuously, and focusing on value delivery, you can build marketing campaigns that consistently outperform expectations." },
  ]

  return (
    <div className="flex flex-col">
      <article className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="primary">{post.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" /> {post.readTime}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
              <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            </div>
          </FadeIn>
        </div>
      </article>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-12">
            <div className="text-center p-8"><p className="text-muted-foreground">Featured Image Placeholder</p></div>
          </div>
          <div className="prose prose-lg max-w-none space-y-12">
            {sections.map((section, i) => (
              <FadeIn key={i}>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          {post.tags && post.tags.length > 0 && (
            <FadeIn>
              <div className="flex items-center gap-2 pt-8 mt-8 border-t border-border">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </SectionWrapper>

      {related.length > 0 && (
        <SectionWrapper className="bg-muted/30">
          <FadeIn><h2 className="text-2xl font-bold text-center mb-8">Related Articles</h2></FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {related.map((rp) => (
                <FadeIn key={rp.slug}>
                  <Link href={`/blog/${rp.slug}`} className="block h-full">
                    <Card className="h-full">
                      <CardContent className="p-5">
                        <Badge variant="primary" className="text-xs mb-2">{rp.category}</Badge>
                        <h3 className="font-bold mb-2 line-clamp-2">{rp.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">Enjoyed This Article?</h2>
            <p className="text-muted-foreground mb-8">Subscribe to my newsletter for more data-driven marketing insights delivered to your inbox.</p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"><Link href="/contact" className="inline-flex items-center gap-1.5">Get in Touch <ArrowRight className="h-4 w-4 shrink-0" /></Link></Button>
          </FadeIn>
        </div>
      </SectionWrapper>

      <CTASection />
    </div>
  )
}
