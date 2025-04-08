"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface SocialButtonProps {
  icon: LucideIcon
  label: string
  tooltip: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
}

export function SocialButton({ icon: Icon, label, tooltip, href, onClick }: SocialButtonProps) {
  const ButtonContent = (
    <>
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
      <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
        {tooltip}
      </span>
    </>
  )

  if (href) {
    return (
      <Button variant="outline" className="rounded-full h-12 w-12 p-0 relative group" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {ButtonContent}
        </a>
      </Button>
    )
  }

  return (
    <Button variant="outline" className="rounded-full h-12 w-12 p-0 relative group" onClick={onClick}>
      {ButtonContent}
    </Button>
  )
}
