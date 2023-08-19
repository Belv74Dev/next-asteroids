import './globals.css'
import style from './layout.module.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Passion_One } from 'next/font/google'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { SendProvider } from '@/providers/SendProvider'
import { ConverterDistanceProvider } from '@/providers/ConverterDistanceProvider'
import { CartProvider } from '@/providers/CartProvider'

const passionOne = Passion_One({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-passion-one',
})

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaRegular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/HelveticaBold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-helvetica',
})

export const metadata: Metadata = {
  title: 'ARMAGEDDON 2023',
  description: 'ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="ru">
      <body className={`${passionOne.variable} ${helvetica.variable}`}>
        <div className={style.content}>
          <Header />
          <div className={style.wrapper}>
            <ConverterDistanceProvider>
              <SendProvider>
                <CartProvider>
                  <div className={style.planet} />
                  {children}
                </CartProvider>
              </SendProvider>
            </ConverterDistanceProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
