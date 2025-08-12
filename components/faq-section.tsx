"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is EX3 and what does it stand for?",
      answer:
        "EX3 (Explore3) is the Greater Toronto Area's premier interdisciplinary case competition for high school students. The name represents our three competition tracks: Pre-Medicine, Pre-Law, and Pre-Finance. It's also an acronym for our methodology: Challenge, Analyze, Solve, Execute.",
    },
    {
      question: "Who can participate in the competition?",
      answer:
        "EX3 is open to all high school students aged 13-18 in the Greater Toronto Area. No prior case competition experience is required - we welcome students from all academic backgrounds who are passionate about medicine, law, or finance.",
    },
    {
      question: "How does the competition format work?",
      answer:
        "The competition features three distinct tracks: Pre-Medicine (medical ethics and healthcare policy), Pre-Law (legal case analysis), and Pre-Finance (financial analysis and business cases). Participants compete in teams, analyze real-world case studies, and present solutions to expert judges.",
    },
    {
      question: "What should I expect on competition day?",
      answer:
        "The full-day event includes check-in, opening ceremonies, introductions to partner organizations, case study distribution, preparation time, presentations, lunch networking, final rounds, and an awards ceremony. Professional attire is required.",
    },
    {
      question: "What are the prizes and recognition opportunities?",
      answer:
        "Winners receive trophies, medals, certificates of participation, publication opportunities (up to 3 publications valued at $200 each), gift cards, and networking opportunities with industry professionals. All participants receive certificates of participation.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "The registration fee is $10. This includes all competition materials, lunch, refreshments, and networking opportunities. We believe in making academic excellence accessible to all students.",
    },
    {
      question: "How are the partner organizations involved?",
      answer:
        "EX3 is a collaborative effort between Dr. Interested (medical focus), Youth Law Advocacy (legal focus), Hope in Every Hand (community service), and Liberation Scientifica (finance focus). Each organization contributes expertise, resources, and mentorship in their respective fields.",
    },
    {
      question: "What kind of cases will we be analyzing?",
      answer:
        "Cases are designed to be challenging yet accessible, covering real-world scenarios in each track. Pre-Medicine cases might involve healthcare policy dilemmas, Pre-Law cases could cover constitutional issues, and Pre-Finance cases might focus on investment strategies and business analysis.",
    },
    {
      question: "Can I participate if I'm unsure about my career path?",
      answer:
        "EX3 is designed to help students explore different career paths. You can choose the track that interests you most, and the experience will provide valuable insights into each field while developing critical thinking and presentation skills.",
    },
    {
      question: "How do I prepare for the competition?",
      answer:
        "While no specific preparation is required, we recommend staying current with news in your chosen field, practicing presentation skills, and reviewing basic case analysis techniques. We'll provide all necessary materials and guidance on competition day.",
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know about participating in EX3. Can't find what you're looking for?
            <a href="mailto:explorethreecomp@gmail.com" className="text-red-600 hover:text-red-700 font-semibold">
              {" "}
              Contact us directly
            </a>
            .
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-blue-500 transition-colors shadow-lg">
              <CardHeader
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex justify-between items-center text-gray-900">
                  <span className="text-left font-semibold">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
                  )}
                </CardTitle>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-lg p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="mb-4">Our team is here to help! Reach out to us directly.</p>
            <a
              href="mailto:explorethreecomp@gmail.com"
              className="inline-flex items-center bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
