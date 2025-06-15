import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Award, Medal, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're grateful to our partners who make EX3 possible and support the next generation of leaders
          </p>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-yellow-600">Gold Sponsors</h3>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="border-4 border-yellow-500 shadow-xl hover:shadow-2xl transition-shadow max-w-md">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src="public\images\sponsors\go-sponsorly-logo.png"
                    alt="Go Sponsorly Logo"
                    fill
                    className="object-contain rounded-lg shadow-lg"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">Go Sponsorly</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">Supporting academic excellence and student innovation</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/gosponsorly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow on Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="w-8 h-8 text-gray-500" />
              <h3 className="text-2xl font-bold text-gray-500">Silver Sponsors</h3>
            </div>
            <p className="text-gray-600">Coming Soon</p>
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Medal className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-orange-600">Bronze Sponsors</h3>
            </div>
            <p className="text-gray-600">Coming Soon</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border-4 border-yellow-500 shadow-2xl">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join our mission to empower the next generation of leaders in law, medicine, and engineering. Partner with
            EX3 and make a lasting impact on student education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold px-8">
              <Link href="/sponsors">View Sponsorship Packages</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold px-8"
            >
              <a href="mailto:explorethreecomp@gmail.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
