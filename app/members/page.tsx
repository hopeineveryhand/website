import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - Hope in Every Hand",
  description:
    "Meet the passionate team behind Hope in Every Hand, dedicated to spreading kindness and making meaningful impact in communities worldwide.",
}

export default function MembersPage() {
  const departments = [
    {
      title: "Department Presidents",
      members: [
        { name: "Nivriti Jain", role: "President" },
        { name: "Devanshi Satapathy", role: "President" },
      ],
    },
    {
      title: "Web Developers",
      members: [
        {
          name: "Adil Mukhi",
          role: "Web Developer",
          website: "https://adilmukhi.vercel.app/",
          instagram: "https://www.instagram.com/adilm.0/",
        },
        { name: "Jenny Hua", role: "Web Developer" },
      ],
    },
    {
      title: "Secretary",
      members: [{ name: "Sankavi Rathan", role: "Secretary" }],
    },
    {
      title: "Operations",
      members: [
        { name: "Rhea Addepalli", role: "Director" },
        { name: "Vivian Xue", role: "Operations Team" },
        { name: "Jojy Thevara", role: "Operations Team" },
      ],
    },
    {
      title: "Public Relations",
      members: [
        { name: "Riva Siroya", role: "Director" },
        { name: "James Zhou", role: "PR Team" },
        { name: "Mihika Paul", role: "PR Team" },
        { name: "Aanya Juneja", role: "PR Team" },
      ],
    },
    {
      title: "Finance",
      members: [{ name: "Anushka Bhati", role: "Finance Team" }],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              The passionate individuals behind Hope in Every Hand, each dedicated to spreading kindness and creating
              meaningful impact in our world.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {departments.map((department, deptIndex) => (
              <div key={deptIndex} className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">{department.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {department.members.map((member, memberIndex) => (
                    <Card
                      key={memberIndex}
                      className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Users className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                        <p className="text-primary font-semibold mb-3">{member.role}</p>

                        {(member.website || member.instagram) && (
                          <div className="flex justify-center gap-3 mt-4">
                            {member.website && (
                              <a
                                href={member.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Website
                              </a>
                            )}
                            {member.instagram && (
                              <a
                                href={member.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Instagram
                              </a>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
            <Users className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-6">
              We're always looking for passionate individuals who want to make a difference. Whether you can volunteer
              your time, skills, or resources, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Heart className="h-5 w-5 mr-2" />
                Get Involved
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Support Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
