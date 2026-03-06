# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 환경 및 설정

### 필수 커맨드

```bash
npm run dev       # 개발 서버 시작 (http://localhost:3000)
npm run build     # 프로덕션 빌드
npm start         # 빌드된 앱 실행
npm run lint      # ESLint로 코드 검사
```

### 기술 스택

- **프레임워크**: Next.js 16.1.6 (App Router)
- **런타임**: React 19.2.3
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS 4 + PostCSS 4
- **UI 라이브러리**: shadcn/ui + Radix UI
- **아이콘**: lucide-react
- **추가 기능**: next-themes (테마), sonner (토스트 알림)

### 경로 별칭 (Path Alias)

```json
"@/*": ["./*"]
```

모든 imports에서 `@/` prefix로 절대 경로 사용 가능:
```tsx
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
```

## 프로젝트 구조

### 주요 디렉토리

```
app/
├── layout.tsx          # 루트 레이아웃 (ThemeProvider, Header, Footer 포함)
├── page.tsx            # 홈페이지 (5개 섹션 조합)
├── error.tsx           # 클라이언트 에러 경계
└── not-found.tsx       # 404 페이지

components/
├── ui/                 # shadcn/ui 컴포넌트들
├── feedback/           # ThemeProvider, Toaster, BackButton
├── layout/             # SectionWrapper (공통 패딩)
├── navigation/         # Header, Footer
└── sections/           # 페이지 섹션 (Hero, Features, Stats, CTA)

lib/
├── types.ts            # NavItem, FooterLink, SiteConfig, StatItem
└── constants.ts        # 사이트 설정, 네비게이션, 푸터, 통계 데이터

hooks/
├── use-mounted.ts      # SSR 안전 마운트 감지
├── use-mobile.ts       # 모바일 뷰포트 감지 (<768px)
└── use-scroll.ts       # 스크롤 위치/방향 추적
```

## 아키텍처 주요 사항

### 1. 테마 시스템

- `next-themes`로 라이트/다크 모드 관리
- `components/feedback/theme-provider.tsx`에서 래핑
- `app/layout.tsx`에 `suppressHydrationWarning` 적용
- `use-mounted()` 훅으로 SSR 안전성 확보

### 2. 컴포넌트 분리 전략

**레이아웃 구조**:
```
layout.tsx (ThemeProvider)
├── Header (sticky, z-50)
├── main.flex-1 (페이지 콘텐츠)
└── Footer
```

**섹션 컴포넌트**: 각 섹션은 독립적인 파일로 분리
- `HeroSection`: 히어로 섹션
- `FeaturesSection`: 피처 (동적 아이콘 매핑)
- `StatsSection`: 통계
- `CTASection`: 콜투액션

### 3. 기능 데이터 관리

**`lib/constants.ts` 패턴**:
- UI 관련 데이터를 상수로 정의 (SITE_CONFIG, NAV_LINKS, FOOTER_LINK_GROUPS 등)
- 아이콘은 문자열로 저장 (JSX 불가) → 컴포넌트에서 동적 매핑

**예: 피처 아이콘 매핑**:
```tsx
// constants.ts: iconName은 문자열
export const FEATURE_ITEMS = [
  { title: "...", description: "...", icon: "Code2" }
]

// features-section.tsx: lucide-react에서 동적 매핑
const iconMap: Record<string, LucideIcon> = {
  Code2: Code2,
  // ...
}
```

### 4. 반응형 디자인

- 모바일 우선 (mobile → sm → md → lg)
- 헤더: 모바일 메뉴(Sheet), 데스크탑 NavigationMenu
- 섹션: 그리드 레이아웃 (1 → 2 → 3 컬럼)

## TypeScript 규칙

- ✅ `any` 타입 금지 (사용자 글로벌 설정)
- ✅ 모든 Props에 명시적 타입 선언
- ✅ React.ComponentType 대신 아이콘 이름 문자열 사용

## 개발 팁

### 새 섹션 추가

1. `components/sections/new-section.tsx` 생성
2. `lib/constants.ts`에서 데이터 정의
3. `app/page.tsx`에 import 후 `<main>` 내부에 추가

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn-cli@latest add [component-name]
```

### 커스텀 훅 추가

SSR 안전이 필요한 경우 `use-mounted()` 사용:
```tsx
const mounted = useMounted()
if (!mounted) return null
```

## 커밋 전 체크리스트

- TypeScript 타입 에러 없음 (`npm run build` 성공)
- ESLint 오류 없음 (`npm run lint` 성공)
- 반응형 디자인 확인 (모바일/태블릿/데스크탑)
- 라이트/다크 모드 테스트
