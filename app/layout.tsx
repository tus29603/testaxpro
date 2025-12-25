import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/constants/content'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${siteConfig.businessName} - Tax Preparation Services`,
  description: 'Professional tax preparation services. Federal & State E-Filing, maximize deductions & credits, remote tax service available.',
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

