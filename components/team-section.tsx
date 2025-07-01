import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ExternalLink, Globe, Instagram } from "lucide-react"
import Image from "next/image"

export default function TeamSection() {
  const clubs = [
    {
      name: "Dr. Interested",
      logo: "/images/clubs/dr-interested.png",
      website: "https://drinterested.tech/",
      email: "explore3@drinterested.tech",
      description: "Leading medical education and healthcare innovation club",
      color: "teal",
      members: [
        {
          name: "Adil Mukhi",
          role: "Technology, Venue & Grants Lead",
          website: "https://adilmukhi.vercel.app/",
          description: "Full-stack developer and venue specialist leading technical infrastructure",
        },
        {
          name: "Kishan Suhirthan",
          role: "Operations & Logistics Lead",
          website: "https://www.linkedin.com/in/kishansuhirthan/",
          description: "Managing logistics coordination and day-of-event operations",
        },
        {
          name: "Velan Mangai Sivakumar",
          role: "Education Lead",
          description: "Developing educational content and resources for participants",
        },
        {
          name: "Arghya Vyas",
          role: "Technology Coordinator",
          description: "Overseeing technical aspects and ensuring smooth event execution",
        },
        {
          name: "Ali Salman",
          role: "Operations & Outreach Coordinator",
          description: "Coordinating outreach efforts and managing event logistics",
        },
      ],
    },
    {
      name: "Hope in Every Hand",
      logo: "/images/clubs/hope-in-every-hand.png",
      website: "https://www.instagram.com/hope_in_every_hand/",
      email: "info@hopeineveryhand.org",
      description: "Community-focused organization creating positive social impact",
      color: "rainbow",
      members: [
        {
          name: "Nivriti Jain",
          role: "Operations & Outreach Lead",
          website: "https://www.linkedin.com/in/nivriti-jain-077969315/",
          description: "Building community partnerships and expanding reach",
        },
        {
          name: "Devanshi Satapathy",
          role: "Volunteer Coordination Lead",
          description: "Managing volunteer recruitment and training programs",
        },
        {
          name: "Rhea Addepalli",
          role: "Social Media & Communications",
          description: "Developing social media strategy and engagement",
        },
        {
          name: "Anushka Bhati",
          role: "Financial Lead",
          description: "Managing financial operations and budget coordination",
        },
        {
          name: "Riva Siroya",
          role: "Social Media & Communications",
          description: "Developing social media strategy and engagement",
        },
      ],
    },
    {
      name: "Youth Law Advocacy",
      logo: "/images/clubs/youth-law-advocacy.png",
      website: "https://www.instagram.com/theyla.ca/",
      email: "contact@youthlawadvocacy.ca",
      description: "Empowering young voices in legal advocacy and justice education",
      color: "red",
      members: [
        {
          name: "Plaksha Panwar",
          role: "Operation, Outreach, and Event Coordinator",
          website: "https://www.linkedin.com/in/plaksha-panwar/",
          description: "Managing event logistics and event operations",
        },
        {
          name: "Hiya Mali",
          role: "Marketing Coordinator",
          website: "https://www.instagram.com/m.hiyaaa/",
          description: "Helping to promote the event and increase participation, sponsors, and partners",
        },
      ],
    },
    {
      name: "Liberation Scientifica",
      logo: "/images/clubs/liberation-scientifica.png",
      website: "https://libsci.tech/",
      email: "team@libsci.tech",
      description: "The Natural Science & Technology Organization",
      color: "blue",
      members: [
        {
          name: "Joshua Fung",
          role: "Marketing Lead",
          description: "Overseeing scientific case development and STEM networking",
        },
      ],
    },
  ]

  const unaffiliatedMembers = [
    {
      name: "Diana Wang-Martin",
      role: "Supervisor",
      description: "Supervisor of the Explore Three Competition, award winning TDSB educator with a passion for STEM education.",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "teal":
        return "border-teal-500 hover:border-teal-400"
      case "red":
        return "border-red-500 hover:border-red-400"
      case "blue":
        return "border-blue-500 hover:border-blue-400"
      case "rainbow":
        return "border-pink-500 hover:border-pink-400"
      default:
        return "border-yellow-500 hover:border-yellow-400"
    }
  }

  return (
    <section id="team" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4 font-playfair">Organizing Committee</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            EX<span className="text-red-600">3</span> represents collaboration between four innovative student
            organizations, creating an interdisciplinary platform for future leaders.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto"></div>
        </div>

        {/* Partner Organizations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-500 mb-8 text-center">Partner Organizations</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <Card
                key={index}
                className={`bg-gray-800/90 border-4 ${getColorClasses(club.color)} shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 group backdrop-blur-sm`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={club.logo || "/placeholder.svg"}
                      alt={`${club.name} Logo`}
                      fill
                      className="object-contain rounded-full shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-yellow-500 text-xl font-playfair mb-2">{club.name}</CardTitle>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{club.description}</p>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex space-x-4">
                      <a
                        href={club.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-yellow-500 transition-colors p-2 rounded-full hover:bg-gray-700/50"
                        title="Visit Website"
                      >
                        {club.website.includes("instagram") ? (
                          <Instagram className="w-5 h-5" />
                        ) : (
                          <Globe className="w-5 h-5" />
                        )}
                      </a>
                      <a
                        href={`mailto:${club.email}`}
                        className="text-red-600 hover:text-yellow-500 transition-colors p-2 rounded-full hover:bg-gray-700/50"
                        title="Send Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                    {club.email !== "TBD" && (
                      <a
                        href={`mailto:${club.email}`}
                        className="text-yellow-400 hover:text-red-600 transition-colors text-sm font-medium"
                      >
                        {club.email}
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {club.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="bg-gray-700/50 rounded-lg p-3 hover:bg-gray-700/70 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          {member.website ? (
                            <a
                              href={member.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-yellow-500 font-semibold transition-colors flex items-center group"
                            >
                              {member.name}
                              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <span className="text-white font-semibold">{member.name}</span>
                          )}
                          <p className="text-red-400 text-sm font-medium mb-1">{member.role}</p>
                          <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Team Members - Optimized for 2 people */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-red-600 mb-8 text-center">Core Team Members</h3>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
              {unaffiliatedMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/90 border-4 border-red-600 hover:border-red-500 shadow-xl hover:shadow-red-600/10 transition-all duration-300 group backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-xl mb-2">{member.name}</h4>
                      <p className="text-red-400 text-base font-medium mb-3">{member.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center bg-gradient-to-r from-gray-800/90 to-gray-700/90 border-4 border-red-600 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-red-600 mb-4">Connect With Our Team</h3>
          <div className="flex flex-col items-center space-y-2 text-yellow-500 mb-4">
            <Mail className="w-6 h-6" />
            <a
              href="mailto:explorethreecomp@gmail.com"
              className="text-lg hover:text-red-600 transition-colors font-semibold"
            >
              explorethreecomp@gmail.com
            </a>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Questions about the competition? Interested in sponsorship opportunities? We're here to help!
          </p>
        </div>
      </div>
    </section>
  )
}
