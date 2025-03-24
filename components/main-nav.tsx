"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, LogOut, Package, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="space-y-6">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center">
          <span className="hidden text-xl font-bold text-primary lg:inline">e-Rachma</span>
          <span className="text-xl font-bold text-primary lg:hidden">e</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === "/" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}
          >
            <Home className="h-5 w-5" />
            <span className="hidden lg:inline">Home</span>
          </Link>
          <Link
            href="/stock"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === "/stock" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}
          >
            <Package className="h-5 w-5" />
            <span className="hidden lg:inline">Stock</span>
          </Link>
          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === "/settings" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}
          >
            <Settings className="h-5 w-5" />
            <span className="hidden lg:inline">Settings</span>
          </Link>
        </nav>
      </div>
      
      {/* User Profile */}
      <div className="mb-8 mt-auto">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback>UR</AvatarFallback>
          </Avatar>
          <div className="hidden text-center lg:block">
            <p className="text-sm font-medium">Admin</p>
            <Link 
              href="/logout" 
              className="mt-1 flex items-center justify-center text-xs text-muted-foreground hover:text-primary"
            >
              <LogOut className="mr-1 h-3 w-3" /> Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}