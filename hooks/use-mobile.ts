/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useLayoutEffect, useState } from "react"

/**
 * 모바일 뷰포트(< 768px) 감지 훅
 * SSR 안전: 초기값은 false
 */
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    // 초기 상태 설정
    const mediaQuery = window.matchMedia("(max-width: 768px)")

    // 초기 값 설정
    setIsMobile(mediaQuery.matches)

    // 미디어 쿼리 변경 리스너
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return isMobile
}
