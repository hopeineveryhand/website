"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("Initializing Excellence...")

  const loadingTexts = [
    "Initializing Excellence...",
    "Preparing Case Studies...",
    "Connecting Expert Judges...",
    "Loading Competition Platform...",
    "Finalizing Experience...",
  ]

  useEffect(() => {
    let textIndex = 0
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length
      setCurrentText(loadingTexts[textIndex])
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 12 + 8
        const newProgress = prev + increment

        if (newProgress >= 100) {
          clearInterval(progressInterval)
          clearInterval(textInterval)
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        return newProgress
      })
    }, 150)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center relative max-w-md mx-auto px-6">
        {/* Prestigious logo container with elegant animations */}
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer rotating ring with golden glow */}
            <div className="absolute inset-0 border-2 border-blue-600 rounded-full animate-spin duration-3000 ease-linear opacity-80"></div>
            <div className="absolute inset-2 border border-red-600 rounded-full animate-pulse duration-2000"></div>

            {/* Inner prestigious container */}
            <div className="absolute inset-4 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-yellow-500/30 shadow-2xl">
              <Image
                src="/images/ex3-logo.png"
                alt="EX3 Logo"
                width={96}
                height={72}
                className="object-contain filter drop-shadow-lg"
              />
            </div>

            {/* Elegant glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-red-600/20 animate-pulse duration-3000"></div>
          </div>
        </div>

        {/* Prestigious brand text */}
        <div className="mb-8">
          <div className="text-blue-600 text-3xl font-bold tracking-wider mb-2 font-playfair">
            EX<span className="text-red-600">3</span>
          </div>
          <div className="text-gray-300 text-sm font-medium tracking-widest uppercase">Case Competition</div>
        </div>

        {/* Elegant progress bar */}
        <div className="w-80 max-w-full mx-auto mb-6">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-red-600 transition-all duration-300 ease-out rounded-full shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-center mt-2">
            <span className="text-blue-400 text-xs font-medium">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Dynamic loading text */}
        <div className="text-gray-300 text-sm font-medium min-h-[20px] transition-all duration-500">{currentText}</div>

        {/* Subtle tagline */}
        <div className="text-gray-500 text-xs mt-4 tracking-wide">Challenge • Analyze • Solve • Execute</div>
      </div>
    </div>
  )
}
