import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Hope in Every Hand",
  description:
    "Get in touch with Hope in Every Hand. Whether you want to volunteer, donate, or learn more about our mission, we'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Ready to make a difference? We'd love to hear from you. Whether you want to volunteer, donate, or learn
              more about our mission, let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Have questions or want to get involved? Email us at{" "}
                  <a
                    href="mailto:hopeineveryhand2704@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    hopeineveryhand2704@gmail.com
                  </a>{" "}
                  and we'll get back to you as soon as possible!
                </p>
                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <p className="text-foreground font-semibold mb-2">We'd love to hear about:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Volunteering opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Partnership inquiries</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Event collaborations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>General questions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Connect With Us</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a
                          href="mailto:hopeineveryhand2704@gmail.com"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          hopeineveryhand2704@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Instagram className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Instagram</h3>
                        <a
                          href="https://www.instagram.com/hope_in_every_hand/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          @hope_in_every_hand
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <ExternalLink className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Linktree</h3>
                        <a
                          href="https://linktr.ee/HopeInEveryHand"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          linktr.ee/HopeInEveryHand
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Ways to Get Involved</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Volunteer at our events</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Organize a fundraiser</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Support our cause</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Spread awareness on social media</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Partner with us on projects</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
