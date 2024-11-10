import { Sidebar } from '@/components/reusable'
import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { Header } from '@/components/reusable/Header'

export const metadata = {
  title: 'Gym App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <main>
            <div>
              <div style={{ backgroundColor: 'red' }}>
                <Header />
                <Sidebar />
                {children}
              </div>
            </div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
