import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Saurabh Saxena | Senior Software Engineer',
  description: 'Senior Software Engineer with 6+ years of experience in python development, specializing in Python and Google Cloud Platform solutions.',
  generator: 'Saurabh Saxena',
  icons: {
    icon: [
      {
        url: 'public/favicon-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'public/favicon-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-96x96.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon-96x96.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased scroll-smooth">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
