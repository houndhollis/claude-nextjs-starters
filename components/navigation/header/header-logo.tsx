import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-sm font-bold">
        M
      </div>
      <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
    </Link>
  )
}
