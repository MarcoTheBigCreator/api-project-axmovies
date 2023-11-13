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
        href="/"
        className={`font-medium text-sm ${pathname === "/" ? "text-primary" : "text-muted-foreground"} transition-colors hover:text-primary`}

      >
        Movies
      </Link>
    </nav>
  )
}