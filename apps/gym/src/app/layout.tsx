import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

export const metadata = {
  title: 'Gym App',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
