import LoadingAnimation from "@/components/loading-animation"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TeamSection from "@/components/team-section"
import SignupSection from "@/components/signup-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <LoadingAnimation />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <SignupSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
