import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Kaan Sirin',
  description: 'Kaan Sirin',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
