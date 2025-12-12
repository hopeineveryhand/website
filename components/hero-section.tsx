"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0" />

      {/* Animated hand silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HIEH%20Logo-rr4VVJHW7CuqaWCAzfJ5xvf7HZc01t.png"
            alt="Hope in Every Hand Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 animate-pulse-glow"
          />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Every hand holds the power to{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            make a difference
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
          Meet the passionate team behind Hope in Every Hand — dedicated to spreading kindness, hope, and meaningful
          impact. Let's build hope, together! &#128153;
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link href="/about" className="flex items-center gap-2">
              Learn Our Story
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
            <p className="text-muted-foreground">Spreading kindness and hope through meaningful action</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Community</h3>
            <p className="text-muted-foreground">Building connections that create lasting impact</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Global Reach</h3>
            <p className="text-muted-foreground">One project at a time toward a sustainable future</p>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    </section>
  )
}
