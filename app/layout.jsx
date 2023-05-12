import { ClerkProvider } from '@clerk/nextjs/app-beta'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { Noto_Sans, Noto_Serif } from 'next/font/google'
import './globals.css'

const noto = Noto_Sans({
  weight: ['100','200','300','400', '500','600','700','800','900'],
  style: ['normal'],
  subsets: ['latin']
})

const noto_serif = Noto_Serif({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata = {
  title: 'next ecommerce',
  description: 'Created by Hamed Bahram'
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang='en'
      className={`${noto.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex flex-col h-full text-zinc-700 dark:text-bg-zinc-100 bg-zinc-100 dark:bg-zinc-800'>
        <ClerkProvider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
