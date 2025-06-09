import Link from "next/link"
import { Mail, Instagram, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-yellow-500 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4 font-playfair">
              EX<span className="text-red-600">3</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              The Greater Toronto Area's premier interdisciplinary case competition, bringing together the brightest
              high school minds to tackle real-world challenges in Law, Medicine, and Science.
            </p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              A collaborative initiative proudly organized by Dr. Interested Medical Club, Youth Law Advocacy, Hope in
              Every Hand, and Liberation Scientifica - representing the future of interdisciplinary education.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-6">Competition</h4>
            <div className="space-y-3">
              <Link href="#about" className="block text-gray-300 hover:text-red-600 transition-colors">
                About EX3
              </Link>
              <Link href="#team" className="block text-gray-300 hover:text-red-600 transition-colors">
                Organizing Team
              </Link>
              <Link href="#signup" className="block text-gray-300 hover:text-red-600 transition-colors">
                Register Now
              </Link>
              <Link href="#faq" className="block text-gray-300 hover:text-red-600 transition-colors">
                FAQ
              </Link>
              <Link
                href="mailto:explorethreecomp@gmail.com"
                className="block text-gray-300 hover:text-red-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-6">Partner Organizations</h4>
            <div className="space-y-3">
              <a
                href="https://drinterested.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-600 transition-colors group"
              >
                Dr. Interested
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.instagram.com/theyla.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-600 transition-colors group"
              >
                Youth Law Advocacy
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.instagram.com/hope_in_every_hand/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-600 transition-colors group"
              >
                Hope in Every Hand
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://libsci.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-600 transition-colors group"
              >
                Liberation Scientifica
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 EX3 Case Competition. All rights reserved. |
                <span className="text-yellow-500"> Challenge • Analyze • Solve • Execute</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Organized by Dr. Interested, Youth Law Advocacy, Hope in Every Hand & Liberation Scientifica
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="https://drinterested.tech/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://drinterested.tech/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
