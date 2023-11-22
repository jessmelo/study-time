import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Coming_Soon } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const coming_soon = Coming_Soon({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Study Time',
  description: 'A simple app to organize your studies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
