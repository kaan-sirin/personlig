import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { PT_Serif } from 'next/font/google'
import './globals.css'
import Image from 'next/image';

const pt_serif = PT_Serif({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K.S',
  description: 'Kaan Sirin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pt_serif.className}>
        <div className='outer-container'>
          <div className='flex-container'>
            <div className='hide-on-small'>
              <Image
                className='hide-on-small'
                src="/pillar.png"
                width={150}
                height={150 * 3.38820638821}
                alt='Power, stability and integrity, left' />
            </div>
            <div className='content'>
              {children}
            </div>
            <div className='hide-on-small'>
              <Image
                src="/pillar.png"
                width={150}
                height={150 * 3.38820638821}
                alt='Power, stability and integrity, right' />
            </div>
          </div>
        </div>
        <Analytics />

      </body>
    </html>
  )
}
