"use client"

import { Home, Package, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background md:hidden">
      <Link
        href="/"
        className={cn(
          "flex flex-col items-center gap-1",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        <Home className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href="/stock"
        className={cn(
          "flex flex-col items-center gap-1",
          pathname === "/stock" ? "text-primary" : "text-muted-foreground"
        )}
      >
        <Package className="h-5 w-5" />
        <span className="text-xs">Stock</span>
      </Link>
      <Link
        href="/settings"
        className={cn(
          "flex flex-col items-center gap-1",
          pathname === "/settings" ? "text-primary" : "text-muted-foreground"
        )}
      >
        <Settings className="h-5 w-5" />
        <span className="text-xs">Settings</span>
      </Link>
    </nav>
  )
}