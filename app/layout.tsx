import type { Metadata, Viewport } from 'next'
import './globals.css'
import {
  Geist as V0_Font_Geist,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from 'next/font/google'

const geist = V0_Font_Geist({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })
const geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const sourceSerif = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'CHAMBAAGO.COM — Servicios para el hogar',
  description: 'Conecta con profesionales para resolver necesidades del hogar.',
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2448',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={geist.variable}>
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
