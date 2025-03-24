"use client"

import { Card } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Bell, LineChart, Package, Truck } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
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
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Bell className="h-6 w-6" />
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="branch-a">Branch A</TabsTrigger>
              <TabsTrigger value="branch-b">Branch B</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Orders</h2>
            <div className="grid gap-4">
              {[
                { id: 2271, status: "Preparing", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
                { id: 2272, status: "Ready", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445" },
                { id: 2273, status: "Served", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
              ].map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-lg">
                      <img src={order.image} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">Order #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">{order.status}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Finances</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-4">
                <h3 className="mb-2 text-sm text-muted-foreground">Daily Revenue</h3>
                <p className="text-2xl font-bold">$2,345</p>
              </Card>
              <Card className="p-4">
                <h3 className="mb-2 text-sm text-muted-foreground">Weekly Earnings</h3>
                <p className="text-2xl font-bold">$14,350</p>
                <p className="text-sm text-green-600">+7% Last 7 Days</p>
                <div className="mt-4 h-[100px]">
                  <LineChart className="h-full w-full text-muted-foreground" />
                </div>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Stock Overview</h2>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-lg bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc"
                    alt="Chicken"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Low Stock Alert</h3>
                  <p className="text-sm text-muted-foreground">Chicken running low, restock soon</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Operational Metrics</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Open/Close Time</h3>
                </div>
                <p className="mt-2 text-lg">9:00 AM / 10:00 PM</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Last Order Time</h3>
                </div>
                <p className="mt-2 text-lg">9:45 PM</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Average Wait Time</h3>
                </div>
                <p className="mt-2 text-lg">15 min</p>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Upcoming Delivery</h2>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Truck className="h-8 w-8 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Tomorrow, 10 items</h3>
                  <button className="mt-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
                    Update Stock
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>

      {/* Mobile navigation */}
      <MobileNav />
    </div>
  )
}