import React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

/**
 * 섹션 공통 패딩 및 최대 너비 설정
 */
export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("container mx-auto max-w-7xl px-4 sm:px-6 py-24", className)}
    >
      {children}
    </section>
  )
}
