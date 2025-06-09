"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 8 + 2

        if (newProgress >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 600)
          return 100
        }
        return newProgress
      })
    }, 120)

    return () => clearInterval(progressInterval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center relative">
        {/* Minimalistic animated logo container */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Single clean rotating border */}
            <div className="absolute inset-0 border-2 border-yellow-500 border-t-transparent animate-spin duration-1000 ease-linear"></div>
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 border border-red-600 rounded-full animate-pulse"></div>
            {/* Logo in center */}
            <div className="absolute inset-3 flex items-center justify-center bg-gray-800 rounded-full">
              <Image src="/images/ex3-logo.png" alt="EX3 Logo" width={40} height={30} className="object-contain" />
            </div>
          </div>
        </div>

        {/* Clean brand text */}
        <div className="text-yellow-500 text-2xl font-bold tracking-wider mb-4">
          EX<span className="text-red-600">3</span>
        </div>

        {/* Minimalistic progress bar */}
        <div className="w-48 h-1 bg-gray-700 mx-auto mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-500 to-red-600 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Simple loading text */}
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    </div>
  )
}
