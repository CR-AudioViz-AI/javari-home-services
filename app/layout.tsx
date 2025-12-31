import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Home Services | Find Trusted Local Pros',
  description: 'Connect with verified contractors, plumbers, electricians, and home service professionals in your area.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
