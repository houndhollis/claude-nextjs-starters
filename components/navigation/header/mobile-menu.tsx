"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="메뉴"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px]" title="메뉴">
        <nav className="flex flex-col gap-4 mt-8 pl-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="text-sm font-medium hover:text-primary transition-colors pt-4 border-t"
          >
            시작하기
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
