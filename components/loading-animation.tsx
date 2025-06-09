"use client"

import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-none animate-spin mx-auto mb-4"></div>
          <div
            className="absolute inset-0 w-24 h-24 border-4 border-red-600 border-b-transparent rounded-none animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>
        <div className="text-yellow-500 text-2xl font-bold tracking-wider">
          EX<span className="text-red-600">3</span>
        </div>
        <div className="text-yellow-500 text-sm mt-2 tracking-wide">Loading Case Competition...</div>
      </div>
    </div>
  )
}
