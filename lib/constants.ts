import type { NavItem, FooterLinkGroup, SiteConfig, StatItem } from "./types"

// 사이트 설정
export const SITE_CONFIG: SiteConfig = {
  name: "ModernStarter",
  description: "Next.js 15 + React 19 + Tailwind CSS로 만든 모던 웹 스타터킷",
  url: "https://modernstarter.vercel.app",
  ogImage: "https://modernstarter.vercel.app/og.png",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com/anthropics/claude-code",
    linkedin: "https://linkedin.com",
  },
}

// 네비게이션 링크
export const NAV_LINKS: NavItem[] = [
  {
    label: "기능",
    href: "#features",
  },
  {
    label: "통계",
    href: "#stats",
  },
  {
    label: "시작하기",
    href: "#cta",
  },
]

// 푸터 링크 그룹
export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "제품",
    links: [
      { label: "기능", href: "#features" },
      { label: "가격", href: "#pricing" },
      { label: "보안", href: "#security" },
      { label: "상태", href: "https://status.example.com", external: true },
    ],
  },
  {
    title: "리소스",
    links: [
      { label: "문서", href: "https://docs.example.com", external: true },
      { label: "블로그", href: "https://blog.example.com", external: true },
      { label: "가이드", href: "https://guides.example.com", external: true },
      { label: "API", href: "https://api.example.com", external: true },
    ],
  },
  {
    title: "법률",
    links: [
      { label: "이용약관", href: "/terms" },
      { label: "개인정보보호정책", href: "/privacy" },
      { label: "쿠키 정책", href: "/cookies" },
      { label: "라이선스", href: "/license" },
    ],
  },
]

// 기능 목록 (아이콘 이름)
export const FEATURE_ITEMS = [
  {
    iconName: "Zap",
    title: "Next.js 15",
    description: "최신 Next.js 버전으로 구축한 초고속 웹 애플리케이션",
  },
  {
    iconName: "Zap",
    title: "React 19",
    description: "React 19의 모든 최신 기능과 성능 최적화 활용",
  },
  {
    iconName: "Grid",
    title: "Tailwind CSS v4",
    description: "최신 Tailwind CSS로 빠르고 효율적인 스타일링",
  },
  {
    iconName: "RotateCcw",
    title: "다크모드",
    description: "next-themes로 구현한 완벽한 라이트/다크 모드 지원",
  },
  {
    iconName: "TrendingUp",
    title: "shadcn/ui",
    description: "프로덕션 준비 완료 UI 컴포넌트 라이브러리",
  },
  {
    iconName: "CheckCircle",
    title: "타입스크립트",
    description: "완전한 타입 안전성으로 더 안정적인 코드 작성",
  },
]

// 통계 목록
export const STATS: StatItem[] = [
  {
    value: "99.9%",
    label: "가동 시간",
  },
  {
    value: "<100ms",
    label: "로딩 속도",
  },
  {
    value: "100",
    label: "Lighthouse 점수",
  },
  {
    value: "0",
    label: "보안 문제",
  },
]
