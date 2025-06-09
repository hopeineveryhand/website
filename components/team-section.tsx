import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Adil",
      role: "Legal & Operations Director",
      responsibilities: "Legal compliance, media waivers, privacy policy, demographics collection",
    },
    {
      name: "Joshua",
      role: "Venue & Marketing Director",
      responsibilities: "Venue coordination, branding strategy, social media campaign",
    },
    {
      name: "Plaksha",
      role: "Partnerships & Logistics Director",
      responsibilities: "Sponsorships, judge recruitment, competitor registration",
    },
    {
      name: "Kishan",
      role: "Technology Director",
      responsibilities: "Website development, digital infrastructure, technical support",
    },
    {
      name: "Hiya",
      role: "Creative Director",
      responsibilities: "Logo design, visual branding, event materials",
    },
    {
      name: "Nivriti",
      role: "Communications Director",
      responsibilities: "MC coordination, participant communications, event flow",
    },
  ]

  return (
    <section id="team" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
            Meet the EX<span className="text-red-600">3</span> Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our dedicated organizing committee is committed to delivering an exceptional case competition experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-800 border-4 border-yellow-500 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-yellow-500 text-xl">{member.name}</CardTitle>
                <p className="text-red-600 font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">{member.responsibilities}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gray-800 border-4 border-red-600 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-red-600 mb-4">Get in Touch</h3>
          <div className="flex justify-center items-center space-x-4 text-yellow-500">
            <Mail className="w-6 h-6" />
            <a
              href="mailto:Ex3@drinterested.tech"
              className="text-lg hover:text-red-600 transition-colors font-semibold"
            >
              Ex3@drinterested.tech
            </a>
          </div>
          <p className="text-gray-300 mt-4">
            Questions about the competition? Interested in sponsorship opportunities? We'd love to hear from you!
          </p>
        </div>
      </div>
    </section>
  )
}
