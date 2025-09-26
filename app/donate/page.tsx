import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, DollarSign, Users, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate - Hope in Every Hand",
  description:
    "Support Hope in Every Hand's mission to spread kindness and make meaningful impact. Every donation helps us create positive change in communities worldwide.",
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Your donation helps us spread kindness and create meaningful impact. Every contribution, big or small,
              makes a difference in someone's life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Direct Impact</h3>
                <p className="text-muted-foreground text-sm">
                  100% of your donation goes directly to our programs and the communities we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Community Focused</h3>
                <p className="text-muted-foreground text-sm">
                  We work directly with communities to ensure sustainable, lasting change.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">
                  Your support helps us expand our impact to communities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border mb-12">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Choose Your Donation Amount
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[25, 50, 100, 250].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="h-16 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-4">Or enter a custom amount:</p>
                <div className="max-w-xs mx-auto">
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground text-center text-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-lg">
                  Donate Now
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Secure donation processing powered by trusted payment partners
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Other Ways to Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Volunteer Your Time</h3>
                <p className="text-muted-foreground text-sm">
                  Join our events and help us make a direct impact in your community.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Organize a Fundraiser</h3>
                <p className="text-muted-foreground text-sm">
                  Host your own event and rally your network around our cause.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Spread the Word</h3>
                <p className="text-muted-foreground text-sm">
                  Share our mission on social media and help us reach more people.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Corporate Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  Partner with us for employee engagement and corporate social responsibility.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a href="/contact">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
