import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"
import { resources } from "@/lib/data"
import { DirectDown, Calendar, TickSquare, Share, ClipboardTick, DocumentText, Video, Hashtag } from "@/lib/iconsax"

const resourceIcons: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="h-6 w-6" />,
  CheckSquare: <TickSquare className="h-6 w-6" />,
  Share2: <Share className="h-6 w-6" />,
  ClipboardCheck: <ClipboardTick className="h-6 w-6" />,
  FileText: <DocumentText className="h-6 w-6" />,
  Video: <Video className="h-6 w-6" />,
  Hash: <Hashtag className="h-6 w-6" />,
}

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">Free Resources</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Resources
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready-to-use templates, checklists, and planners to streamline your marketing efforts and drive better results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((resource, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Card className="card-premium h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-4">
                      {resourceIcons[resource.icon] || <DocumentText className="h-6 w-6" />}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-accent/20 text-accent bg-accent/5">
                        {resource.type}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">{resource.description}</p>
                    <Button variant="outline" className="w-full gap-2 border-accent/20 text-accent hover:bg-accent hover:text-white" asChild>
                      <a href={resource.link}><DirectDown className="h-4 w-4" /> Download</a>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
