import { Sidebar } from '@/components/reusable'
import { Header } from '@/components/reusable/Header'
import { PageWrapper } from '@/components/reusable/LayoutWrappers/PageWrapper/PageWrapper'
import { BodyWrapper } from '@/components/reusable/LayoutWrappers/BodyWrapper/BodyWrapper'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <BodyWrapper>
        <Header />
        <PageWrapper>{children}</PageWrapper>
      </BodyWrapper>
    </div>
  )
}
