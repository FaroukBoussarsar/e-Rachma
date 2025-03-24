"use client"

import { Card } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { 
  Building2, 
  ChevronRight, 
  CreditCard, 
  Pizza, 
  Receipt, 
  Shield, 
  Users, 
  X 
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - hidden on mobile */}
      <div className="fixed left-0 top-0 hidden h-screen w-16 border-r bg-background p-3 md:block">
        <MainNav />
      </div>

      {/* Main content */}
      <div className="md:pl-16">
        <main className="container mx-auto p-4 pb-20 md:p-8 md:pb-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Business Settings</h1>
            <Button variant="ghost" size="icon">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="mb-12">
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-muted">
              <img
                src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=800&auto=format&fit=crop&q=60"
                alt="Restaurant logo"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-center text-xl font-bold">The Culinary Canvas</h2>
            <p className="text-center text-muted-foreground">123 Main St, Anytown, CA</p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Profile & Details</h2>
            <div className="space-y-2">
              <Card className="cursor-pointer p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Edit Restaurant Info</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
              <Card className="cursor-pointer p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <Pizza className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Manage Menu</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Staff & Roles</h2>
            <div className="space-y-2">
              <Card className="cursor-pointer p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <Users className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Staff Management</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
              <Card className="cursor-pointer p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Role Permissions</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold">Payments & Billing</h2>
            <div className="space-y-2">
              <Card className="cursor-pointer p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Payment Options</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
              <Card className="cursor-pointer p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <Receipt className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Billing Details</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile navigation */}
      <MobileNav />
    </div>
  )
}