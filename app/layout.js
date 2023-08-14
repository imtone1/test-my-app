import { Footer } from '@/sections'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
