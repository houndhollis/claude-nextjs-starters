import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function FooterBottom() {
  return (
    <div className="border-t border-border/40 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; 2025 {SITE_CONFIG.name}. 모든 권리 예약.
      </p>

      <div className="flex items-center gap-2">
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
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}

        {SITE_CONFIG.links.twitter && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label="Twitter"
          >
            <a
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
        )}

        {SITE_CONFIG.links.linkedin && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label="LinkedIn"
          >
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
