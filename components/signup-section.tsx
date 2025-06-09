"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Trophy } from "lucide-react"

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
            Secure your spot in the GTA's premier case competition. Limited spaces available!
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

          {/* Registration Form */}
          <Card className="border-4 border-red-600 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-semibold">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="border-2 border-gray-300 focus:border-red-600"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-semibold">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="border-2 border-gray-300 focus:border-red-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-2 border-gray-300 focus:border-red-600"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-2 border-gray-300 focus:border-red-600"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade" className="text-gray-700 font-semibold">
                      Grade *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("grade", value)}>
                      <SelectTrigger className="border-2 border-gray-300 focus:border-red-600">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9">Grade 9</SelectItem>
                        <SelectItem value="10">Grade 10</SelectItem>
                        <SelectItem value="11">Grade 11</SelectItem>
                        <SelectItem value="12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="school" className="text-gray-700 font-semibold">
                    School Name *
                  </Label>
                  <Input
                    id="school"
                    value={formData.school}
                    onChange={(e) => handleInputChange("school", e.target.value)}
                    className="border-2 border-gray-300 focus:border-red-600"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="track" className="text-gray-700 font-semibold">
                    Competition Track *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("track", value)}>
                    <SelectTrigger className="border-2 border-gray-300 focus:border-red-600">
                      <SelectValue placeholder="Select your track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prelaw">Pre-Law</SelectItem>
                      <SelectItem value="premed">Pre-Medicine</SelectItem>
                      <SelectItem value="prestem">Pre-STEM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-gray-700 font-semibold">
                    Relevant Experience (Optional)
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="border-2 border-gray-300 focus:border-red-600"
                    placeholder="Tell us about any relevant experience in your chosen track..."
                  />
                </div>

                <div>
                  <Label htmlFor="dietary" className="text-gray-700 font-semibold">
                    Dietary Restrictions
                  </Label>
                  <Input
                    id="dietary"
                    value={formData.dietary}
                    onChange={(e) => handleInputChange("dietary", e.target.value)}
                    className="border-2 border-gray-300 focus:border-red-600"
                    placeholder="Any dietary restrictions or allergies?"
                  />
                </div>

                <div>
                  <Label htmlFor="emergency" className="text-gray-700 font-semibold">
                    Emergency Contact *
                  </Label>
                  <Input
                    id="emergency"
                    value={formData.emergency}
                    onChange={(e) => handleInputChange("emergency", e.target.value)}
                    className="border-2 border-gray-300 focus:border-red-600"
                    placeholder="Name and phone number"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="media"
                      checked={formData.mediaConsent}
                      onCheckedChange={(checked) => handleInputChange("mediaConsent", checked as boolean)}
                    />
                    <Label htmlFor="media" className="text-sm text-gray-700">
                      I consent to photography/videography for promotional purposes *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-700">
                      I accept the terms and conditions and liability waiver *
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 font-bold py-3 text-lg"
                  disabled={!formData.mediaConsent || !formData.termsAccepted}
                >
                  Register for EX3
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
