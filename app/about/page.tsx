import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Hope in Every Hand",
  description:
    "Learn about our mission to spread kindness and make meaningful impact. Growing up privileged, we work toward a more sustainable future, one project at a time.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Story & Mission
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Get to know our mindset and main mission behind the beginning of an impactful organization 🫂🧡✨
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Purpose</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every hand holds the power to make a difference. We believe in spreading kindness, hope, and creating
                  meaningful impact in our communities and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether big or small, every action matters. One project at a time, we work towards a more sustainable
                  future for those who need it most.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 mb-16 border border-border">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">Why We Started</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto text-pretty">
              Growing up privileged in middle class households, we never fully understood what it would be like to not
              have easy access to some of the basic necessities. This realization sparked our commitment to bridge that
              gap and ensure that what we do will matter to those in need — because sometimes we all need a hope in
              every hand.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">How We Make Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1️⃣</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Plan an Event</h3>
                <p className="text-muted-foreground">
                  Organize fundraisers and community events that bring people together for a cause
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2️⃣</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Host with Purpose</h3>
                <p className="text-muted-foreground">
                  Create meaningful experiences that inspire others to take action
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3️⃣</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Donate & Support</h3>
                <p className="text-muted-foreground">Contribute to causes that matter and make a direct difference</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
            <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Together, We Can Make a Difference</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              One step, one event, one act of kindness at a time. Every hand has the power to spark change! ✨
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
