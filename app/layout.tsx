import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Hope in Every Hand - Spreading Kindness & Making Impact",
  description:
    "Every hand holds the power to make a difference. Join Hope in Every Hand in spreading kindness, hope, and meaningful impact through events, fundraisers, and donations.",
  keywords: "charity, nonprofit, hope, kindness, impact, fundraising, events, donations, community service",
  authors: [{ name: "Hope in Every Hand" }],
  creator: "Hope in Every Hand",
  publisher: "Hope in Every Hand",
  openGraph: {
    title: "Hope in Every Hand - Spreading Kindness & Making Impact",
    description: "Every hand holds the power to make a difference. Join us in building hope together.",
    url: "https://hopeineveryhand.org",
    siteName: "Hope in Every Hand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope in Every Hand - Spreading Kindness & Making Impact",
    description: "Every hand holds the power to make a difference. Join us in building hope together.",
  },
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
