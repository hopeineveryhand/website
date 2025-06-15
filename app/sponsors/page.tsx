import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, Users, Trophy, Target, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Sponsor EX3 - Partnership Opportunities",
  description:
    "Partner with EX3 Case Competition to support the next generation of leaders in law, medicine, and science. Explore our sponsorship packages and benefits for your organization.",
  keywords:
    "EX3 sponsorship, case competition sponsors, student competition partnership, Toronto education sponsorship, academic event sponsors",
  openGraph: {
    title: "Sponsor EX3 - Partnership Opportunities",
    description: "Partner with EX3 to support future leaders in law, medicine, and science",
    url: "https://explore3.vercel.app/sponsors",
  },
}

export default function SponsorsPage() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "Brand Exposure",
      description: "Reach 130+ high-achieving students and their families",
    },
    {
      icon: <Trophy className="w-8 h-8 text-red-600" />,
      title: "Talent Pipeline",
      description: "Connect with future leaders in your industry",
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-600" />,
      title: "Targeted Marketing",
      description: "4 orgs each focused on High Schoolers. Over 200k views combined!",
    },
    {
      icon: <Handshake className="w-8 h-8 text-red-600" />,
      title: "Community Impact",
      description: "Support education and student development in the GTA",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-4 font-playfair">
              Partner with EX<span className="text-red-600">3</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Support the next generation of leaders in law, medicine, and science while growing your brand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4" disabled>
                <Download className="w-5 h-5 mr-2" />
                Sponsorship Package (Coming Soon)
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold px-8 py-4"
                asChild
              >
                <a href="mailto:explorethreecomp@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sponsor EX3?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join us in empowering the brightest young minds while achieving your marketing and recruitment goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-yellow-500 transition-colors">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">{benefit.icon}</div>
                    <CardTitle className="text-gray-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sponsorship Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Multiple partnership levels to fit your organization's goals and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Gold Tier */}
              <Card className="border-4 border-yellow-500 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold">GOLD</div>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl text-gray-900">Premier Partnership</CardTitle>
                  <p className="text-gray-600">Maximum visibility and impact</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center text-gray-600">
                    <p>• Logo on all materials</p>
                    <p>• Speaking opportunity</p>
                    <p>• Dedicated booth space</p>
                    <p>• Social media features</p>
                    <p>• Shoutout at Event</p>
                  </div>
                </CardContent>
              </Card>

              {/* Silver Tier */}
              <Card className="border-4 border-gray-400 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-400 text-white px-6 py-2 rounded-full font-bold">SILVER</div>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl text-gray-900">Supporting Partnership</CardTitle>
                  <p className="text-gray-600">Strong brand presence</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center text-gray-600">
                    <p>• Logo on key materials</p>
                    <p>• Networking access</p>
                    <p>• Social media mentions</p>
                    <p>• Event recognition</p>
                  </div>
                </CardContent>
              </Card>

              {/* Bronze Tier */}
              <Card className="border-4 border-orange-600 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold">BRONZE</div>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl text-gray-900">Community Partnership</CardTitle>
                  <p className="text-gray-600">Essential support recognition</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center text-gray-600">
                    <p>• Logo on website</p>
                    <p>• Event program listing</p>
                    <p>• Free Tickets for Employees</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-red-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join leading organizations in supporting academic excellence and future innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4" asChild>
                <a href="mailto:explorethreecomp@gmail.com">Get Sponsorship Details</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
