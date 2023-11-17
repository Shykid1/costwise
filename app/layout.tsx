// These styles apply to every route in the application
import './globals.css'
import type { Metadata } from 'next'
import {Inter, Space_Grotesk} from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({subsets: ['latin']})
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Costwise',
  description: 'Track the cost of products effortlessly and save money on online shopping',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
            <Navbar />
            {children}
        </main>
    </body>
    </html>
  )
}