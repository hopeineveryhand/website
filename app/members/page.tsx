import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - Hope in Every Hand",
  description:
    "Meet the passionate team behind Hope in Every Hand, dedicated to spreading kindness and making meaningful impact in communities worldwide.",
}

export default function MembersPage() {
  const departments = [
    {
      title: "Presidents",
      members: [
        { name: "Nivriti Jain", role: "President", image: "/team/Headshot - Nivriti J.png" },
        { name: "Devanshi Satapathy", role: "President", image: "/team/Headshot - Devanshi.jpg" },
      ],
    },
    {
      title: "Web Developers",
      members: [
        {
          name: "Adil Mukhi",
          role: "Web Developer",
          image: "/team/Headshot - Adil Mukhi.PNG",
        },
        { name: "Jenny Hua", role: "Web Developer", image: "/favicon.ico" },
      ],
    },
    {
      title: "Secretary",
      members: [{ name: "Sankavi Rathan", role: "Secretary", image: "/team/Headshot - Sankavi Rathan.jpg" }],
    },
    {
      title: "Operations",
      members: [
        { name: "Rhea Addepalli", role: "Director", image: "/team/Headshot - Riva.jpg" },
        { name: "Vivian Xue", role: "Coordinator", image: "/team/Headshot - Vivian.jpg" },
        { name: "Jojy Thevara", role: "Coordinator", image: "/team/Headshot - Jojy Thevara.jpg" },
      ],
    },
    {
      title: "Public Relations",
      members: [
        { name: "Riva Siroya", role: "Director", image: "/team/Headshot - Riva.jpg" },
        { name: "James Zhou", role: "Coordinator", image: "/team/Headshot - James Zhou.png" },
        { name: "Mihika Paul", role: "Coordinator", image: "/team/headshot mihika.jpg" },
        { name: "Aanya Juneja", role: "Coordinator", image: "/team/IMG-20250822-Aanya Juneja.jpg" },
      ],
    },
    {
      title: "Finance",
      members: [{ name: "Anushka Bhati", role: "Coordinator", image: "/team/Headshot - Anushka Bhati.png" }],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div
                  className={`grid gap-6 justify-center ${
                    department.title === "Public Relations"
                      ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {department.members.map((member, memberIndex) => (
                    <Card
                      key={memberIndex}
                      className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300"
                    >
                      <CardContent className="p-6 text-center flex flex-col items-center">
                        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          {member.image ? (
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Users className="h-10 w-10 text-primary" />
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                        <p className="text-primary font-semibold mb-3">{member.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20 max-w-4xl mx-auto">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
