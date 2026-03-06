"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/hooks/use-mounted"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isMounted = useMounted()

  if (!isMounted) return null

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="테마 전환"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform" />
      ) : (
        <Moon className="h-5 w-5 transition-transform" />
      )}
    </Button>
  )
}
