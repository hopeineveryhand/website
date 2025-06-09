import Link from "next/link"
import { Mail, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-yellow-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              EX<span className="text-red-600">3</span>
            </h3>
            <p className="text-gray-300 mb-4">
              The GTA's premier case competition for high school students passionate about Law, Medicine, and Science.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:Ex3@drinterested.tech" className="text-yellow-500 hover:text-red-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-red-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-red-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-300 hover:text-red-600 transition-colors">
                About the Competition
              </Link>
              <Link href="#team" className="block text-gray-300 hover:text-red-600 transition-colors">
                Meet the Team
              </Link>
              <Link href="#signup" className="block text-gray-300 hover:text-red-600 transition-colors">
                Register Now
              </Link>
              <Link
                href="mailto:Ex3@drinterested.tech"
                className="block text-gray-300 hover:text-red-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">Competition Tracks</h4>
            <div className="space-y-2">
              <div className="text-gray-300">
                <span className="text-red-600 font-semibold">Pre-Law:</span> Legal case analysis
              </div>
              <div className="text-gray-300">
                <span className="text-yellow-500 font-semibold">Pre-Med:</span> Medical ethics & policy
              </div>
              <div className="text-gray-300">
                <span className="text-red-600 font-semibold">Pre-STEM:</span> Scientific innovation
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 EX3 Case Competition. All rights reserved. |
            <span className="text-yellow-500"> Challenge • Analyze • Solve • Execute</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
