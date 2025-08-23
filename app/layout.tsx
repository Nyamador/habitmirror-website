import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "HabitMirror - Track Your Progress Daily",
  description:
    "Capture your daily progress with one photo. See your transformation over time with HabitMirror.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
        {children}
      </body>
    </html>
  )
}
