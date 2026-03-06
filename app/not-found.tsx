import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/feedback/back-button"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export default function NotFound() {
  return (
    <main className="flex-1">
      <SectionWrapper className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
        <div className="text-8xl font-black text-muted-foreground/20 mb-4">
          404
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          페이지를 찾을 수 없습니다
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          죄송합니다. 찾으시는 페이지가 존재하지 않습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/">홈으로</Link>
          </Button>
          <BackButton />
        </div>
      </SectionWrapper>
    </main>
  )
}
