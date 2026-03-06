import Link from "next/link"
import type { FooterLinkGroup } from "@/lib/types"

interface FooterLinksProps {
  groups: FooterLinkGroup[]
}

export function FooterLinks({ groups }: FooterLinksProps) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-semibold text-sm mb-4">{group.title}</h3>
          <ul className="space-y-3">
            {group.links.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
