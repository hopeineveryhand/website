import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL("https://explore3.vercel.app"),
  title: {
    default: "EX3 Case Competition 2025 - Toronto's Premier High School Medicine, Law & Finance Competition",
    template: "%s | EX3 Case Competition 2025",
  },
  description:
    "Join EX3 (Explore3), the Greater Toronto Area's most prestigious interdisciplinary case competition for high school students aged 13-18. Compete in Pre-Medicine, Pre-Law, and Pre-Finance tracks with expert judges, networking opportunities, and substantial prizes. $10 registration for November 2025.",
  keywords: [
    "EX3 case competition",
    "Explore 3",
    "Explore3",
    "Explor3",
    "EX3",
    "Toronto case competition",
    "TMU case competition",
    "Toronto high school competition",
    "GTA student competition",
    "law case competition",
    "medical case competition",
    "finance case competition",
    "high school debate",
    "student networking Toronto",
    "Dr. Interested Medical Club",
    "Youth Law Advocacy",
    "Hope in Every Hand",
    "pre-law students",
    "pre-med students",
    "pre-finance students",
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
    "TMU Ted Rogers School",
    "November 2025 competition",
    "student judges",
    "academic networking",
    "career exploration",
    "university preparation",
    "Adil Mukhi",
  ].join(", "),
  authors: [
    { name: "EX3 Organizing Committee", url: "https://explore3.vercel.app/" },
    { name: "Dr. Interested Medical Club", url: "https://drinterested.tech" },
    { name: "Youth Law Advocacy", url: "https://www.instagram.com/theyla.ca/" },
    { name: "Hope in Every Hand", url: "https://www.instagram.com/hope_in_every_hand/" },
    { name: "Adil Mukhi", url: "https://adilmukhi.vercel.app/" },
  ],
  creator: "EX3 Case Competition Organizing Committee",
  publisher: "Dr. Interested & Partner Organizations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://explore3.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://explore3.vercel.app/",
    siteName: "EX3 Case Competition",
    title: "EX3 Case Competition 2025 - Challenge • Analyze • Solve • Execute",
    description:
      "The GTA's premier interdisciplinary case competition for high school students. Compete in Medicine, Law, and Finance tracks with expert judges, networking, and prizes. $10 registration now open for November 2025!",
    images: [
      {
        url: "/images/ex3-logo-caption.png",
        width: 1200,
        height: 630,
        alt: "EX3 Case Competition - Medicine | Law | Finance",
        type: "image/png",
      },
      {
        url: "/images/ex3-logo.png",
        width: 800,
        height: 600,
        alt: "EX3 Logo",
        type: "image/png",
      },
    ],
    countryName: "Canada",
  },
  twitter: {
    card: "summary_large_image",
    title: "EX3 Case Competition 2025 - Toronto's Premier Student Competition",
    description:
      "Join the GTA's most prestigious case competition for high school students. Three tracks: Medicine, Law, Finance. $10 registration open!",
    images: ["/images/ex3-logo-caption.png"],
    creator: "@ex3competition",
    site: "@ex3competition",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
  category: "Education",
  classification: "Academic Competition",
  verification: {
    google: "googleca4bc9b82cca29c3",
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "geo.position": "43.6532;-79.3832",
    ICBM: "43.6532, -79.3832",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
  generator: "v0.dev",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      "@id": "https://explore3.vercel.app/#event",
      name: "EX3 Case Competition 2025",
      description:
        "The Greater Toronto Area's premier interdisciplinary case competition for high school students aged 13-18",
      startDate: "2025-11-22T09:00:00-05:00",
      endDate: "2025-11-22T16:00:00-05:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "TMU Ted Rogers School of Management",
        address: {
          "@type": "PostalAddress",
          streetAddress: "55 Dundas St W",
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
        {
          "@type": "Organization",
          name: "Hope in Every Hand",
          url: "https://www.instagram.com/hope_in_every_hand/",
        },
      ],
      offers: {
        "@type": "Offer",
        price: "10",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        url: "https://explore3.vercel.app/#signup",
      },
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        audienceType: "high school students aged 13-18",
      },
      keywords: "case competition, high school, medicine, law, finance, Toronto, GTA, academic competition",
      image: "https://explore3.vercel.app/images/ex3-logo-caption.png",
    },
    {
      "@type": "Organization",
      "@id": "https://explore3.vercel.app/#organization",
      name: "EX3 Case Competition",
      url: "https://explore3.vercel.app/",
      logo: "https://explore3.vercel.app/images/ex3-logo.png",
      description: "Premier interdisciplinary case competition for high school students in the Greater Toronto Area",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "explorethreecomp@gmail.com",
        contactType: "customer service",
      },
      sameAs: [
        "https://drinterested.tech",
        "https://www.instagram.com/theyla.ca/",
        "https://www.instagram.com/hope_in_every_hand/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://explore3.vercel.app/#website",
      url: "https://explore3.vercel.app/",
      name: "EX3 Case Competition",
      description: "The Greater Toronto Area's premier interdisciplinary case competition for high school students",
      publisher: {
        "@id": "https://explore3.vercel.app/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://explore3.vercel.app/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
  ],
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
