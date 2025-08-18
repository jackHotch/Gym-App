import './globals.css'
// import '@gymapp/styles/globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { Navbar } from '@/components/reusable/Navbar/Navbar'

export const metadata = {
  title: 'Jacked',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
