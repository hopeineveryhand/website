import { Trophy, Users, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About EX<span className="text-red-600">3</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore3 brings together high school students passionate about Law, Medicine, and Engineering in the GTA's
            most prestigious annual case competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="border-4 border-gray-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
              <CardTitle className="text-gray-900">Competition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Three competitive tracks: Pre-Law, Pre-Med, and Pre-Engineering with prizes and recognition.
              </p>
            </CardContent>
          </Card>

          <Card className="border-4 border-gray-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-2" />
              <CardTitle className="text-gray-900">Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Connect with like-minded peers, industry professionals, and expert judges.
              </p>
            </CardContent>
          </Card>

          <Card className="border-4 border-gray-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <Calendar className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
              <CardTitle className="text-gray-900">Full Day Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Opening ceremonies, competition rounds, lunch networking, and awards ceremony.
              </p>
            </CardContent>
          </Card>

          <Card className="border-4 border-gray-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-2" />
              <CardTitle className="text-gray-900">Prestigious Venue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Professional setting with auditorium-style presentation and networking spaces.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-900 border-4 border-yellow-500 rounded-lg p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Competition Tracks</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg mb-4 shadow-lg">PRE-LAW</div>
              <p className="text-gray-300 leading-relaxed">
                Legal case analysis, argumentation, and constitutional law challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg mb-4 shadow-lg">PRE-MED</div>
              <p className="text-gray-300 leading-relaxed">
                Medical ethics, healthcare policy, and clinical decision-making scenarios.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg mb-4 shadow-lg">PRE-ENGINEERING</div>
              <p className="text-gray-300 leading-relaxed">
                Engineering innovation, technical solutions, and design challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
