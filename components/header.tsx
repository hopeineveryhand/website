"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900 border-b-4 border-blue-600 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/ex3-logo.png" alt="EX3 Logo" width={60} height={40} className="object-contain" />
            <div className="text-blue-600 text-xl font-bold tracking-wider">
              EX<span className="text-red-600">3</span>
            </div>
          </Link>

          {/* Desktop Navigation  */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-600 hover:text-red-600 font-semibold transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-blue-600 hover:text-red-600 font-semibold transition-colors">
              About
            </Link>
            <Link href="/cases" className="text-blue-600 hover:text-red-600 font-semibold transition-colors">
              Cases
            </Link>
            <Link href="/gallery" className="text-blue-600 hover:text-red-600 font-semibold transition-colors">
              Gallery
            </Link>
            <Link href="/sponsors" className="text-blue-600 hover:text-red-600 font-semibold transition-colors">
              Sponsors
            </Link>
            <Link href="/#team" className="text-blue-600 hover:text-red-600 font-semibold transition-colors">
              Team
            </Link>
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 font-bold px-6"
            >
              <Link href="/#signup">Register</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-600 hover:text-red-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-500">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-blue-600 hover:text-red-600 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-blue-600 hover:text-red-600 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/cases"
                className="text-blue-600 hover:text-red-600 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cases
              </Link>
              <Link
                href="/gallery"
                className="text-blue-600 hover:text-red-600 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/sponsors"
                className="text-blue-600 hover:text-red-600 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsors
              </Link>
              <Link
                href="/#team"
                className="text-blue-600 hover:text-red-600 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 font-bold w-fit"
              >
                <Link href="/#signup" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
