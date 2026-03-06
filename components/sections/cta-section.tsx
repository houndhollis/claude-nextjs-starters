import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Zap, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <SectionWrapper id="cta">
      <Card className="bg-primary text-primary-foreground p-8 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          이 스타터킷으로 당신의 다음 프로젝트를 빠르게 시작하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <a href="https://github.com/anthropics/claude-code" target="_blank" rel="noopener noreferrer">
              <Zap className="mr-2 h-4 w-4" />
              저장소 방문하기
            </a>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/20"
            asChild
          >
            <Link href="/">
              문서 읽기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </SectionWrapper>
  )
}
