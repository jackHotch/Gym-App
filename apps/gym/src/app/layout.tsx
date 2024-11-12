import { Sidebar } from '@/components/reusable'
import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { Header } from '@/components/reusable/Header'
import { PageWrapper } from '@/components/reusable/LayoutWrappers/PageWrapper/PageWrapper'
import { relative } from 'path'
import { BodyWrapper } from '@/components/reusable/LayoutWrappers/BodyWrapper/BodyWrapper'

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
              <BodyWrapper>
                <Header />
                <PageWrapper>{children}</PageWrapper>
              </BodyWrapper>
            </div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
