'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/feed"
        className={`font-medium text-sm ${pathname === "/feed" ? "text-primary" : "text-muted-foreground"} transition-colors hover:text-primary`}
      >
        Feed
      </Link>
      <Link
        href="/books"
        className={`font-medium text-sm ${pathname === "/books" ? "text-primary" : "text-muted-foreground"} transition-colors hover:text-primary`}
        
      >
        Books
      </Link>
    </nav>
  )
}