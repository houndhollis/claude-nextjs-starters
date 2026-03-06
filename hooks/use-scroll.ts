"use client"

import { useEffect, useState } from "react"

/**
 * 스크롤 위치 및 방향 감지 훅
 * @returns { y: number, direction: "up" | "down" }
 */
export function useScroll() {
  const [scrollData, setScrollData] = useState({
    y: 0,
    direction: "down" as "up" | "down",
  })

  useEffect(() => {
    let lastY = 0

    const handleScroll = () => {
      const currentY = window.scrollY
      const direction = currentY > lastY ? "down" : "up"

      setScrollData({
        y: currentY,
        direction,
      })

      lastY = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollData
}
