"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { AlertTriangle } from "lucide-react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex-1">
      <SectionWrapper className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-16 w-16 text-destructive mb-4" />

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          오류가 발생했습니다
        </h1>

        <p className="text-lg text-muted-foreground mb-2 max-w-md">
          요청을 처리하는 중에 문제가 발생했습니다.
        </p>

        {process.env.NODE_ENV === "development" && error.message && (
          <details className="mt-4 p-4 bg-muted rounded-lg text-left text-sm max-w-md">
            <summary className="cursor-pointer font-semibold mb-2">
              오류 상세 정보
            </summary>
            <pre className="overflow-auto text-xs">
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          </details>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button onClick={reset}>
            다시 시도
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">홈으로</Link>
          </Button>
        </div>
      </SectionWrapper>
    </main>
  )
}
