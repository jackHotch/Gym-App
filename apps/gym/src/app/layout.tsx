import { Sidebar } from '@/components/reusable'
import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { Header } from '@/components/reusable/Header'
import { PageWrapper } from '@/components/reusable/PageWrapper/PageWrapper'

export const metadata = {
  title: 'Gym App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <main>
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Header />
                <PageWrapper>{children}</PageWrapper>
              </div>
            </div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
