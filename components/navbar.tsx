"use client"
import Image from "next/image"
import Link from "next/link"
import { Wind, Bell, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Navbar() {
  const [notifications, setNotifications] = useState(3)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-100 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold">
                  Dashboard
                </Link>
                <Link href="/demand-supply" className="text-lg">
                  Demand & Supply
                </Link>
                <Link href="/grid-health" className="text-lg">
                  Grid Health
                </Link>
                <Link href="/renewable-energy" className="text-lg">
                  Renewable Energy
                </Link>
                <Link href="/alerts" className="text-lg">
                  Alerts & Suggestions
                </Link>
                <Link href="/reports" className="text-lg">
                  Reports
                </Link>
                <Link href="/power-cuts" className="text-lg">
                  Power Cut Tracker
                </Link>
                <Link href="/settings" className="text-lg">
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
  <Image
    src="C:\Users\gandh\Downloads\nexergy-dashboard\.next\static\media\logo1.png"   // Notice the leading slash
    alt="Nexergy Logo"
    width={32}
    height={32}
  />
  <span className="text-xl font-bold">NEXERGY</span>
</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium">
            HOME
          </Link>
          <Link href="/contact" className="font-medium">
            CONTACT US
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                {notifications}
              </span>
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="flex w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login" className="flex w-full">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

