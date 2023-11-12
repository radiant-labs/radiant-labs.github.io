import './css/style.css'

import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'RadiantKit GitHub',
  description: 'Build Graphic Apps 10x Faster!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-BDC4T0F9SW" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BDC4T0F9SW');
        `}
      </Script>
      <Head>
        <title>RadiantKit Github</title>
        <meta name="google-site-verification" content="xy_j_QQqJqkGPz_WT10w76FR3HBixyk5PdP0QERa3ks" />
      </Head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
