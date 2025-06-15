import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Camera, Calendar, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery - EX3 Case Competition 2025",
  description:
    "Photo gallery from EX3 Case Competition events, showcasing student participants, judges, and memorable moments from Toronto's premier high school case competition.",
  keywords:
    "EX3 gallery, case competition photos, student competition images, Toronto high school events, academic competition gallery",
  openGraph: {
    title: "Gallery - EX3 Case Competition 2025",
    description: "Photo gallery from EX3 Case Competition events and activities",
    url: "https://explore3.vercel.app/gallery",
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-4 font-playfair">
              EX<span className="text-red-600">3</span> Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Capturing the moments that define excellence in academic competition
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-xl p-12 border-4 border-yellow-500">
                <Camera className="w-24 h-24 text-yellow-600 mx-auto mb-8" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery Coming Soon</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're preparing an amazing collection of photos and videos from EX3 events. Check back soon to see
                  highlights from our case competitions, networking sessions, and award ceremonies.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Competition Moments</h3>
                    <p className="text-gray-600 text-sm">Students presenting their case solutions</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Calendar className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Event Highlights</h3>
                    <p className="text-gray-600 text-sm">Behind-the-scenes from competition day</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Trophy className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Awards Ceremony</h3>
                    <p className="text-gray-600 text-sm">Celebrating our winners and participants</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Want to be featured?</h3>
                  <p className="mb-4">Register for EX3 2025 and be part of our next gallery showcase!</p>
                  <a
                    href="/#signup"
                    className="inline-flex items-center bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
