import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'
import '@/styles/globals.css'
import MainLayout from '@/components/layout/MainLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Israel Araujo - Desenvolvedor Full Stack',
  description: 'Portfólio profissional de Israel Araujo, desenvolvedor full stack especializado em React, Next.js, Node.js e tecnologias modernas.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'nextjs', 'nodejs', 'typescript', 'portfolio'],
  authors: [{ name: 'Israel Araujo' }],
  creator: 'Israel Araujo',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://israelaraujo.dev',
    title: 'Israel Araujo - Desenvolvedor Full Stack',
    description: 'Portfólio profissional de Israel Araujo, desenvolvedor full stack.',
    siteName: 'Israel Araujo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Israel Araujo - Desenvolvedor Full Stack',
    description: 'Portfólio profissional de Israel Araujo, desenvolvedor full stack.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}