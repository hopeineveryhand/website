import Link from "next/link"
import { Heart, Instagram, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold text-foreground">Hope in Every Hand</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-pretty">
              Every hand has the power to spark change. Together, we're turning ideas into action through events,
              fundraisers, and donations that make a meaningful difference.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/hope_in_every_hand/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://linktr.ee/HopeInEveryHand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-6 w-6" />
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">1️⃣ Plan an event or fundraiser</li>
              <li className="text-muted-foreground">2️⃣ Host with heart and purpose</li>
              <li className="text-muted-foreground">3️⃣ Donate to a cause that matters</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Hope in Every Hand. Made with ❤️ for a better world.</p>
        </div>
      </div>
    </footer>
  )
}
