import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Blog',
    default: 'Next.js Blog - Modern Web Development',
  },
  description: 'A modern blog built with Next.js, featuring SSR, ISR, and dynamic routing',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Blog'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Next.js Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Blog',
    description: 'A modern blog built with Next.js',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body className="min-h-screen flex flex-col bg-purple-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
