import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gray-900 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 mb-4 tracking-wider">
              EX<span className="text-red-600">3</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-4">
              The GTA's Premier Case Competition
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              <span className="text-yellow-500 font-semibold">Challenge</span> •{" "}
              <span className="text-yellow-500 font-semibold">Analyze</span> •{" "}
              <span className="text-yellow-500 font-semibold">Solve</span> •{" "}
              <span className="text-yellow-500 font-semibold">Execute</span>
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 font-bold px-8 py-3 text-lg w-full sm:w-auto"
              >
                <Link href="#signup">Register Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold px-8 py-3 text-lg w-full sm:w-auto"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500 transform rotate-3 rounded-lg"></div>
              <div className="relative bg-gray-800 border-4 border-yellow-500 rounded-lg p-8">
                <Image
                  src="/images/ex3-logo-caption.png"
                  alt="EX3 - Science | Medicine | Law"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
