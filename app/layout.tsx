import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "EX3 Case Competition 2025 - Toronto's Premier High School Law, Medicine & Science Competition",
  description:
    "Join EX3 (Explore3), the Greater Toronto Area's most prestigious interdisciplinary case competition for high school students aged 13-18. Compete in Pre-Law, Pre-Medicine, and Pre-STEM tracks with expert judges, networking opportunities, and substantial prizes. Organized by Dr. Interested Medical Club, Youth Law Advocacy, Hope in Every Hand, and Liberation Scientifica. Registration now open for summer 2025.",
  keywords: [
    "EX3 case competition",
    "Explore3 competition",
    "Toronto high school competition",
    "GTA student competition",
    "law case competition",
    "medical case competition",
    "STEM case competition",
    "high school debate",
    "student networking Toronto",
    "Dr. Interested Medical Club",
    "Youth Law Advocacy",
    "Hope in Every Hand",
    "Liberation Scientifica",
    "Adil Mukhi",
    "pre-law students",
    "pre-med students",
    "pre-STEM students",
    "academic competition Ontario",
    "student leadership",
    "case study competition",
    "interdisciplinary competition",
    "Toronto student events",
    "high school case analysis",
    "student innovation challenge",
    "academic excellence",
    "competitive academics",
    "student development",
    "professional networking students",
    "Ontario high school events",
  ].join(", "),
  authors: [
    { name: "EX3 Organizing Committee", url: "https://ex3.drinterested.tech" },
    { name: "Dr. Interested Medical Club", url: "https://drinterested.tech" },
    { name: "Youth Law Advocacy", url: "https://www.instagram.com/theyla.ca/" },
    { name: "Hope in Every Hand", url: "https://www.instagram.com/hope_in_every_hand/" },
    { name: "Liberation Scientifica", url: "https://libsci.tech/" },
    { name: "Adil Mukhi", url: "https://adilmukhi.vercel.app/" },
  ],
  creator: "EX3 Case Competition Organizing Committee",
  publisher: "Dr. Interested & Partner Organizations",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://ex3.drinterested.tech",
  },
  openGraph: {
    title: "EX3 Case Competition 2025 - Challenge • Analyze • Solve • Execute",
    description:
      "The GTA's premier interdisciplinary case competition for high school students. Compete in Law, Medicine, and Science tracks with expert judges, networking, and prizes. Registration now open!",
    url: "https://ex3.drinterested.tech",
    siteName: "EX3 Case Competition",
    images: [
      {
        url: "/images/ex3-logo-caption.png",
        width: 1200,
        height: 630,
        alt: "EX3 Case Competition - Science | Medicine | Law",
        type: "image/png",
      },
    ],
    locale: "en_CA",
    type: "website",
    countryName: "Canada",
  },
  twitter: {
    card: "summary_large_image",
    title: "EX3 Case Competition 2025 - Toronto's Premier Student Competition",
    description:
      "Join the GTA's most prestigious case competition for high school students. Three tracks: Law, Medicine, Science.",
    images: ["/images/ex3-logo-caption.png"],
    creator: "@ex3competition",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dc2626" },
    { media: "(prefers-color-scheme: dark)", color: "#fbbf24" },
  ],
  category: "Education",
  classification: "Academic Competition",
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "geo.position": "43.6532;-79.3832",
    ICBM: "43.6532, -79.3832",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "EX3 Case Competition 2025",
  description: "The Greater Toronto Area's premier interdisciplinary case competition for high school students",
  startDate: "2025-07-15",
  endDate: "2025-07-15",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Professional Venue - Toronto Area",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  },
  organizer: [
    {
      "@type": "Organization",
      name: "Dr. Interested Medical Club",
      url: "https://drinterested.tech",
    },
    {
      "@type": "Organization",
      name: "Youth Law Advocacy",
      url: "https://www.instagram.com/theyla.ca/",
    },
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/ex3-logo.png" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="format-detection" content="telephone=no" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
