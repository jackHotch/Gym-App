import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

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
              <div style={{ backgroundColor: 'red' }}>{children}</div>
            </div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
