import '@/styles/globals.css'

import type { Metadata } from 'next'

import { Toaster } from 'sonner'

import Navbar from '@/components/nav'
import Footer from '@/components/footer'

import { Roboto } from 'next/font/google'


// TODO - use google font library instead
const roboto = Roboto(
  {
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  }
)

export const metadata: Metadata = {
  title: 'Connect',
  description: 'We are reinventing the ticketing experience',
  openGraph: {
    title: 'Connect',
    description: 'We are reinventing the ticketing experience',
    url: 'https://useconnect.app',
    siteName: 'Connect',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors position='top-right' />
        <div className='w-full max-w-screen-2xl overflow-x-hidden'>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
