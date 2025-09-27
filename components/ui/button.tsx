"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  href?: string
  target?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, target, children, ...props }, ref) => {
    const baseStyles = "game-button inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-game-accent disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-game-primary hover:bg-game-primary/90 text-white",
      outline: "border border-game-accent bg-transparent hover:bg-game-accent/20 text-game-accent",
      ghost: "hover:bg-game-primary/20 text-game-light hover:text-game-accent"
    }
    
    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes} target={target}>
          {children}
        </Link>
      )
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }