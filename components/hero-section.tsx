import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fbbf24' fillOpacity='0.1'%3E%3Crect width='11' height='11'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Main Title */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                EX
              </span>
              <span className="text-red-600 drop-shadow-lg">3</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
              The GTA's Premier
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Case Competition
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
              Where high school visionaries compete in interdisciplinary challenges across Law, Medicine, and Science.
              Join 100+ students for a day of intellectual excellence and professional networking.{" "}
              <span className="font-semibold text-blue-400">Registration: $10</span>
            </p>

            {/* Action Words */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {["Challenge", "Analyze", "Solve", "Execute"].map((word, index) => (
                <div key={word} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mr-2"></div>
                  <span className="text-blue-400 font-semibold text-lg tracking-wide">{word}</span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-500">3</div>
                <div className="text-gray-400 text-sm">Tracks</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-500">4</div>
                <div className="text-gray-400 text-sm">Partners</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-600">1</div>
                <div className="text-gray-400 text-sm">Day</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-2 border-red-600 hover:border-red-700 font-bold px-8 py-4 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href="https://forms.gle/cAaTsWKRrXFrt76T8" target="_blank" rel="noopener noreferrer">
                  Register Now - $10
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold px-8 py-4 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Logo and Info Cards */}
          <div className="flex flex-col items-center space-y-6">
            {/* Main Logo Display */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-600 transform rotate-3 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-800 border-4 border-yellow-500 rounded-lg p-6 shadow-2xl group-hover:shadow-yellow-500/20 transition-all duration-300">
                <Image
                  src="/images/ex3-logo-caption.png"
                  alt="EX3 - Science | Medicine | Law"
                  width={400}
                  height={300}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-gray-800/80 border-2 border-blue-500/50 rounded-lg p-4 text-center backdrop-blur-sm">
                <Calendar className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Summer 2025</div>
                <div className="text-gray-400 text-xs">Full Day Event</div>
              </div>
              <div className="bg-gray-800/80 border-2 border-red-600/50 rounded-lg p-4 text-center backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">GTA Venue</div>
                <div className="text-gray-400 text-xs">Professional Setting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
