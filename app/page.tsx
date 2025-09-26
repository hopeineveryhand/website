import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ParticleBackground } from "@/components/particle-background"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <Footer />
    </main>
  )
}
