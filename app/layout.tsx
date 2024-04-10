import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';

import { ThemeProvider } from '@/components/providers/theme-provider'

import './globals.css'

import TopNavigation from "@/components/navigation/top-nav";
import { PAGEDESCRIPTION, PAGETITLE } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: PAGETITLE,
  description: PAGEDESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="labux-theme"
        >
          <TopNavigation/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
