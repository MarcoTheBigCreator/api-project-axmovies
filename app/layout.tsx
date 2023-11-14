import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionProvider from './SessionProvider';
import { Toaster } from '../components/ui/toaster';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication page.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}
