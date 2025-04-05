"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  LineChart,
  Activity,
  Sun,
  AlertTriangle,
  FileText,
  Power,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      active: true,
    },
    {
      title: "Demand & Supply",
      icon: LineChart,
      href: "/demand-supply",
    },
    {
      title: "Grid Health",
      icon: Activity,
      href: "/grid-health",
    },
    {
      title: "Renewable Energy",
      icon: Sun,
      href: "/renewable-energy",  
    },
  ]

  return (
    <div className="flex flex-1 overflow-hidden">
      <aside
        className={cn(
          "bg-slate-50 border-r flex flex-col transition-all duration-300",
          collapsed ? "w-[70px]" : "w-[250px]",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className={cn("font-semibold", collapsed && "hidden")}>Navigation</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <nav className="flex flex-col gap-1 p-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  item.active ? "bg-slate-200 text-slate-900" : "text-slate-700 hover:bg-slate-100",
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>
      <main className="flex-1 overflow-auto bg-slate-100">
        <div className="container py-6">{children}</div>
      </main>
    </div>
  )
}

