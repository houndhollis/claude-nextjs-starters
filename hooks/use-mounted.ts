/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useLayoutEffect, useState } from "react"

/**
 * 서버/클라이언트 하이드레이션 미스매치를 방지하기 위한 훅
 * SSR 환경에서 안전하게 클라이언트 코드 실행
 */
export function useMounted() {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}
