import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Zap, Github } from "lucide-react"

export function HeroSection() {
  return (
    <SectionWrapper className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <Badge className="mb-4" variant="secondary">
        Next.js 15 + React 19
      </Badge>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
        모던 웹 스타터킷으로 프로젝트 시작하기
      </h1>

      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        Next.js 15, React 19, Tailwind CSS v4, shadcn/ui로 만든 프로덕션 준비 완료 스타터킷입니다.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link href="#features">
            <Zap className="mr-2 h-4 w-4" />
            시작하기
          </Link>
        </Button>

        <Button size="lg" variant="outline" asChild>
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>
    </SectionWrapper>
  )
}
