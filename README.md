# Next.js 15 모던 스타터킷

현대적인 웹 애플리케이션 개발을 위한 Next.js 스타터 템플릿입니다. 반응형 디자인, 다크모드, 재사용 가능한 UI 컴포넌트로 빠르게 프로젝트를 시작할 수 있습니다.

## ✨ 주요 기능

- **모던 UI 컴포넌트**: shadcn/ui 기반의 재사용 가능한 UI 컴포넌트
- **다크모드**: next-themes를 활용한 라이트/다크 모드 지원
- **반응형 디자인**: 모바일부터 데스크탑까지 완벽한 반응형 레이아웃
- **토스트 알림**: sonner를 이용한 깔끔한 토스트 UI
- **아이콘 라이브러리**: lucide-react의 다양한 아이콘
- **TypeScript**: 타입 안전성으로 개발 생산성 향상
- **Tailwind CSS**: 유틸리티 기반의 빠른 스타일링

## 🚀 빠른 시작

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn, pnpm, bun

### 설치 및 실행

1. **저장소 클론**
```bash
git clone <repository-url>
cd claude-nextjs-starters
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 결과를 확인할 수 있습니다.

## 📦 기술 스택

| 분류 | 기술 |
|------|------|
| **프레임워크** | Next.js 16.1.6 (App Router) |
| **런타임** | React 19.2.3 |
| **언어** | TypeScript 5 |
| **스타일링** | Tailwind CSS 4 + PostCSS 4 |
| **UI 라이브러리** | shadcn/ui + Radix UI |
| **아이콘** | lucide-react |
| **테마** | next-themes |
| **토스트** | sonner |
| **린터** | ESLint 9 |

## 📁 프로젝트 구조

```
.
├── app/                        # Next.js App Router
│   ├── layout.tsx             # 루트 레이아웃 (ThemeProvider, Header, Footer)
│   ├── page.tsx               # 홈페이지
│   ├── error.tsx              # 클라이언트 에러 경계
│   └── not-found.tsx          # 404 페이지
│
├── components/
│   ├── ui/                    # shadcn/ui 컴포넌트들
│   ├── feedback/              # 테마, 토스터, 버튼
│   ├── layout/                # 섹션 래퍼
│   ├── navigation/            # 헤더, 푸터
│   └── sections/              # 페이지 섹션들
│
├── lib/
│   ├── types.ts               # TypeScript 타입 정의
│   └── constants.ts           # 앱 설정 및 콘텐츠 데이터
│
├── hooks/                     # 커스텀 React 훅
│   ├── use-mounted.ts         # SSR 안전 마운트 감지
│   ├── use-mobile.ts          # 모바일 뷰포트 감지
│   └── use-scroll.ts          # 스크롤 위치/방향 추적
│
└── public/                    # 정적 에셋
```

## 💻 주요 커맨드

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start

# 코드 검사 (ESLint)
npm run lint
```

## 🎨 페이지 구성

홈페이지는 5개의 섹션으로 구성되어 있습니다:

1. **HeroSection**: 인상적인 헤더 섹션
2. **FeaturesSection**: 주요 기능 소개 (동적 아이콘)
3. **StatsSection**: 통계 및 성과 표시
4. **CTASection**: 콜투액션 섹션

각 섹션은 `lib/constants.ts`에서 콘텐츠를 관리하므로 쉽게 커스터마이징할 수 있습니다.

## 🎯 개발 가이드

### 새로운 섹션 추가

1. `components/sections/` 디렉토리에 새 컴포넌트 파일 생성
2. `lib/constants.ts`에서 필요한 데이터 정의
3. `app/page.tsx`에서 import 후 `<main>` 내부에 추가

### 컴포넌트 커스터마이징

- **UI 컴포넌트**: `components/ui/` 폴더의 shadcn/ui 컴포넌트 수정
- **헤더/푸터**: `components/navigation/` 에서 수정
- **색상/테마**: `globals.css` 및 `tailwind.config` 수정

### SSR 안전성

다음과 같은 클라이언트 전용 기능을 사용할 때는 `use-mounted()` 훅 사용:

```tsx
"use client"
import { useMounted } from "@/hooks/use-mounted"

export function MyComponent() {
  const mounted = useMounted()
  if (!mounted) return null

  return <div>{/* 클라이언트 전용 콘텐츠 */}</div>
}
```

## 🌐 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에서 계정 생성
2. GitHub 저장소 연결
3. 자동으로 배포됨

```bash
# 또는 Vercel CLI 사용
npm i -g vercel
vercel
```

### 기타 호스팅

Next.js는 Node.js를 지원하는 모든 호스팅 서비스에 배포 가능합니다:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud
- 등...

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.

## 📚 학습 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 가이드](https://ui.shadcn.com)

## 🤝 기여하기

버그 리포트나 기능 제안은 언제든 환영합니다!

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
