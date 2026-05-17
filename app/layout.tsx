// app/layout.tsx — Javari Home Services
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Home Services | Javari by CR AudioViz AI',
  description: 'AI contractor finder',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Home Services" appColor="#78716c" appEmoji="🏡" appDesc="AI contractor finder">{children}</AppShell></body></html>)
}
