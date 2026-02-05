import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boise Water Damage Pros | 24/7 Emergency Restoration',
  description: 'Emergency water damage restoration in Boise, ID. 24/7 immediate response. Insurance direct billing. Free estimates. Call now!',
  keywords: 'water damage restoration Boise, flood cleanup, mold remediation, emergency water removal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}