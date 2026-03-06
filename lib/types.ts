import type React from "react"

// 네비게이션 항목 타입
export interface NavItem {
  label: string
  href: string
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

// 푸터 링크 타입
export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

// 푸터 링크 그룹 타입
export interface FooterLinkGroup {
  title: string
  links: FooterLink[]
}

// 사이트 설정 타입
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

// 통계 항목 타입
export interface StatItem {
  value: string
  label: string
}
