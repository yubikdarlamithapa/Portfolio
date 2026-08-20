import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import CertificationCard from "@/components/cards/certification-card"
import { CTASection } from "@/components/sections/cta-section"
import { skills, certifications } from "@/lib/data"
import { Star, Global } from "@/lib/iconsax"

const softSkills = [
  "Strategic Thinking", "Client Communication", "Project Management",
  "Team Leadership", "Problem Solving", "Data Analysis",
  "Creative Direction", "Time Management",
]

const languages = [
  { name: "English", level: "Native" },
  { name: "Afrikaans", level: "Fluent" },
  { name: "Xhosa", level: "Conversational" },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function SkillsPage() {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">Expertise</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Skills & Expertise
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                7+ years mastering the tools and strategies that drive measurable marketing results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="space-y-12 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <FadeIn key={cat}>
                <h2 className="text-2xl font-bold mb-6">{cat}</h2>
                <div className="space-y-4">
                  {skills.filter((s) => s.category === cat).map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-premium">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Soft Skills</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Beyond technical expertise, these interpersonal skills drive client success.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {softSkills.map((skill, i) => (
              <FadeIn key={i}>
                <Card className="card-premium h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Star className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-4">Languages</h2>
              <p className="text-muted-foreground text-center mb-10">Enabling effective communication across diverse markets.</p>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-4">
              {languages.map((lang, i) => (
                <FadeIn key={i}>
                  <Card className="card-premium text-center">
                    <CardContent className="p-6">
                      <Global className="h-8 w-8 text-accent mx-auto mb-3" />
                      <h3 className="font-semibold">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-premium">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Certifications</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Industry-recognised credentials from the world&apos;s leading marketing platforms.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((certification, i) => (
              <FadeIn key={i}><CertificationCard certification={certification} /></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
