import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import ProviderWrapper from '@/modules/ProviderWrapper'
import { Providers } from '@/modules/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multi-Streaming',
  description: 'Multi streaming application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrapper>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            >
              <Providers>
                {children}
              </Providers>
          </ThemeProvider>
        </ProviderWrapper>
        
        </body>
    </html>
  )
}
