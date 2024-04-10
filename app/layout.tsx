import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Script from 'next/script';

import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

import { PAGEDESCRIPTION, PAGETITLE } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] })

const TopNavigation = dynamic(() => import('@/components/navigation/top-nav'), { ssr: false })

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
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
        <Script id='google-analytics'>
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `
          }
        </Script>
      </head>
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
