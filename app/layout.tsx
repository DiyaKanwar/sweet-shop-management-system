import type React from "react"
import type { Metadata } from "next"
import { Pacifico, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-display" })
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Sweetory - Authentic Indian Sweets Online",
  description:
    "Discover the finest selection of traditional Indian sweets - from rich Milk Fudge to syrup-soaked delicacies, handcrafted Laddoos, and festive specialties.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
