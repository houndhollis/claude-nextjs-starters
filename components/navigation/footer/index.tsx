import { FooterLinks } from "./footer-links"
import { FooterBottom } from "./footer-bottom"
import { FOOTER_LINK_GROUPS, SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          <FooterLinks groups={FOOTER_LINK_GROUPS} />
        </div>

        <FooterBottom />
      </div>
    </footer>
  )
}
