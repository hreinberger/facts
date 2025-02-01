import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fakten",
  description: "Auf dieser Seite sammelt Hannes nützliche Links zur Unterstützung seiner Diskussionen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}

