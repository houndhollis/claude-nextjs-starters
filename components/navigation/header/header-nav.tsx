import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NAV_LINKS } from "@/lib/constants"

export function HeaderNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link href={link.href} className={navigationMenuTriggerStyle()}>
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
