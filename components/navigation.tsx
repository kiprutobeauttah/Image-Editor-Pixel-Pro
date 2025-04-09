"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  Menu,
  Home,
  Paintbrush,
  Sparkles,
  FolderOpen,
  FileImage,
  Compass,
  BookOpen,
  CreditCard,
  HelpCircle,
  User,
  ChevronDown,
} from "lucide-react"

const mainNavItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Editor",
    href: "/editor",
    icon: Paintbrush,
  },
  {
    title: "AI Studio",
    href: "/ai",
    icon: Sparkles,
  },
  {
    title: "My Projects",
    href: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Templates",
    href: "/templates",
    icon: FileImage,
  },
  {
    title: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: CreditCard,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                  <Paintbrush className="h-5 w-5" />
                  <span>PhotoMaster</span>
                </Link>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-7 py-2 text-muted-foreground hover:text-foreground",
                      pathname === item.href && "text-foreground font-medium",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/help"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-7 py-2 text-muted-foreground hover:text-foreground",
                    pathname === "/help" && "text-foreground font-medium",
                  )}
                >
                  <HelpCircle className="h-5 w-5" />
                  Help Center
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 font-bold">
            <Paintbrush className="h-5 w-5" />
            <span className="hidden md:inline-block">PhotoMaster</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline-block">Account</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/billing">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/help">Help Center</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="sm" asChild>
            <Link href="/editor">Try Editor</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
