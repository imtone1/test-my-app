import { Footer } from '@/sections'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test my app - website for testing',
  description: 'App for frontend testing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Congratulations! You found developer tools! */}
      {children}

      <Footer/>
      </body>
    </html>
  )
}
