import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { tools } from "@/lib/data"

const proficiencyColors: Record<string, string> = {
  Expert: "bg-accent text-white",
  Advanced: "bg-accent/20 text-accent border border-accent/30",
  Intermediate: "bg-muted text-muted-foreground border border-border",
}

const toolCategories = [...new Set(tools.map((t) => t.category))]
const categoryOrder = ["Advertising Platforms", "Analytics", "SEO", "Design", "Video", "Productivity", "AI Tools"]
const sortedCategories = categoryOrder.filter((c) => toolCategories.includes(c))

export default function ToolsPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">My Stack</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Tools & Platforms
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The tools I use daily to plan, execute, and optimise high-performance marketing campaigns.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-12">
            {sortedCategories.map((cat) => (
              <div key={cat}>
                <FadeIn>
                  <h2 className="text-2xl font-bold mb-6">{cat}</h2>
                </FadeIn>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tools.filter((t) => t.category === cat).map((tool, i) => (
                    <FadeIn key={i} delay={i * 0.03}>
                      <Card className="card-premium h-full">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold">{tool.name}</h3>
                            <Badge className={`text-xs ${proficiencyColors[tool.proficiency as string] || "bg-muted text-muted-foreground"}`}>
                              {tool.proficiency as string}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
