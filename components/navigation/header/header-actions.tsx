import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { SITE_CONFIG } from "@/lib/constants"

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />

      {SITE_CONFIG.links.github && (
        <Button
          variant="ghost"
          size="icon"
          asChild
          aria-label="GitHub"
        >
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
      )}

      <Button
        size="sm"
        className="hidden sm:inline-flex"
        asChild
      >
        <Link href="#cta">시작하기</Link>
      </Button>
    </div>
  )
}
