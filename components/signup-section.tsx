"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Trophy, ExternalLink } from "lucide-react"

export default function SignupSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    track: "",
    experience: "",
    dietary: "",
    emergency: "",
    mediaConsent: false,
    termsAccepted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Registration submitted! We'll be in touch soon.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="signup" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Register for EX<span className="text-red-600">3</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot in the GTA's premier case competition.{" "}
            <span className="font-bold text-blue-600">$10 registration fee</span> - First come, first served!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Event Details */}
          <div className="space-y-6">
            <Card className="border-4 border-gray-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-red-600" />
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-yellow-600" />
                  <span>Full Day Event - Check-in to Awards Ceremony</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-red-600" />
                  <span>Professional Venue (Details sent upon registration)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Trophy className="w-5 h-5 mr-3 text-yellow-600" />
                  <span>Prizes, Certificates & Publication Opportunities</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-yellow-500 bg-gray-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Competition materials and case studies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Lunch and refreshments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Networking opportunities with judges</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Certificate of participation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Professional development workshops</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Link */}
          <Card className="border-4 border-red-600 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Quick Registration</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Registration Fee: $10</h3>
                <p className="text-blue-700 mb-4">First come, first served basis</p>
                <p className="text-sm text-gray-600">Limited spots available for this exclusive competition</p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 font-bold py-4 text-lg"
              >
                <a
                  href="https://forms.gle/cAaTsWKRrXFrt76T8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Register Now - $10
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <p className="text-sm text-gray-500">
                You will be redirected to our secure Google Form to complete your registration
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full day competition experience</li>
                  <li>• Lunch and refreshments</li>
                  <li>• Networking opportunities</li>
                  <li>• Certificate of participation</li>
                  <li>• Prizes for winners</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
