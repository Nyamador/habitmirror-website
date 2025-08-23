"use client"

import { sendGTMEvent } from "@next/third-parties/google"
import Link from "next/link"
import { useCallback } from "react"

type Props = {
  href: string
  event: Record<string, unknown>
  className?: string
  children: React.ReactNode
}

export default function TrackingCta({
  href,
  event,
  className,
  children,
}: Props) {
  const handleClick = useCallback(() => {
    try {
      sendGTMEvent(event)
    } catch {
      // no-op
    }
  }, [event])

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
