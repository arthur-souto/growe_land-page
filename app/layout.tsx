import type { Metadata } from 'next'
import { DM_Serif_Display, Plus_Jakarta_Sans, Geist } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

export const metadata: Metadata = {
  title: 'Growe — Sua equipe cresce. Você enxerga.',
  description: 'Plataforma de avaliação e gestão de desempenho para pequenas e médias empresas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={cn(dmSerif.variable, "font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/growe-logo-icon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}