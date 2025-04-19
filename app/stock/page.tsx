"use client"

import { Card } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Pencil, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function StockPage() {
  const stockItems = [
    { name: "Widget A", quantity: 50, status: "normal" },
    { name: "Widget B", quantity: 25, status: "normal" },
    { name: "Widget C", quantity: 10, status: "low" },
    { name: "Widget D", quantity: 100, status: "normal" },
    { name: "Widget E", quantity: 0, status: "out" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - hidden on mobile */}
      <div className="fixed left-0 top-0 hidden h-screen border-r bg-background p-3 md:block md:w-16 lg:w-72">
        <MainNav />
      </div>

      {/* Main content */}
      <div className="md:pl-16 lg:pl-72">
        <main className="container mx-auto p-4 pb-20 md:p-8 md:pb-8">
          <h1 className="mb-8 text-2xl font-bold">Stock Management</h1>

          <Tabs defaultValue="all">
            {({ activeTab, setActiveTab }) => (
              <TabsList activeTab={activeTab} setActiveTab={setActiveTab}>
                <TabsTrigger value="all" activeTab={activeTab} setActiveTab={setActiveTab}>
                  All
                </TabsTrigger>
                <TabsTrigger value="branch-a" activeTab={activeTab} setActiveTab={setActiveTab}>
                  Branch A
                </TabsTrigger>
                <TabsTrigger value="branch-b" activeTab={activeTab} setActiveTab={setActiveTab}>
                  Branch B
                </TabsTrigger>
              </TabsList>
            )}
          </Tabs>

          <div className="mb-8">
            <h2 className="mb-6 text-xl font-semibold">Inventory Overview</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-4">
                <h3 className="text-sm text-muted-foreground">Total Stock</h3>
                <p className="mt-2 text-2xl font-bold">325 Items</p>
              </Card>
              <Card className="p-4">
                <h3 className="text-sm text-muted-foreground">Total Value</h3>
                <p className="mt-2 text-2xl font-bold">$12,500</p>
              </Card>
              <Card className="p-4">
                <h3 className="text-sm text-muted-foreground">Items Out of Stock</h3>
                <p className="mt-2 text-2xl font-bold">10 Items</p>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold">Stock Items</h2>
            <div className="grid gap-4">
              {stockItems.map((item) => (
                <Card key={item.name} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className={`text-sm ${
                        item.status === 'out' 
                          ? 'text-red-500' 
                          : item.status === 'low' 
                          ? 'text-orange-500' 
                          : 'text-muted-foreground'
                      }`}>
                        Quantity: {item.quantity}
                        {item.status === 'low' && ' (Low Stock)'}
                        {item.status === 'out' && ' (Out of Stock)'}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Button className="mt-6 w-full" size="lg">
              <Plus className="mr-2 h-4 w-4" /> Add Stock
            </Button>
          </div>
        </main>
      </div>

      {/* Mobile navigation */}
      <MobileNav />
    </div>
  )
}