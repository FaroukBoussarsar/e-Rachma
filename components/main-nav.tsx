"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Package, Settings } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-4">
      <Link
        href="/"
        className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        <Home className="h-4 w-4" />
        <span className="hidden md:inline">Home</span>
      </Link>
      <Link
        href="/stock"
        className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
          pathname === "/stock" ? "text-primary" : "text-muted-foreground"
        )}
      >
        <Package className="h-4 w-4" />
        <span className="hidden md:inline">Stock</span>
      </Link>
      <Link
        href="/settings"
        className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
          pathname === "/settings" ? "text-primary" : "text-muted-foreground"
        )}
      >
        <Settings className="h-4 w-4" />
        <span className="hidden md:inline">Settings</span>
      </Link>
    </nav>
  )
}