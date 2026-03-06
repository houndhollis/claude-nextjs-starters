import { HeaderLogo } from "./header-logo"
import { HeaderNav } from "./header-nav"
import { HeaderActions } from "./header-actions"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <HeaderLogo />

        <HeaderNav />

        <div className="flex items-center gap-2">
          <HeaderActions />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
