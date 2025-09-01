import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sesura - Ambient Ses Karıştırıcı',
  description: 'Çoklu ambient sesleri karıştırarak kendi huzur ortamınızı yaratın',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
