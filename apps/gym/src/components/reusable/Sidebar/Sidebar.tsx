'use client'

import styles from './Sidebar.module.css'
import { useRouter } from 'next/navigation'
import { SidebarDesktop } from './SidebarDesktop/SidebarDesktop'
import { SidebarMobile } from './SidebarMobile/SidebarMobile'

export const Sidebar = () => {
  const router = useRouter()
  const options = [
    { name: 'Splits', href: () => router.push('/splits') },
    { name: 'Record', href: () => router.push('/record') },
    { name: 'Weight', href: () => router.push('/weight') },
    { name: 'Progress', href: () => router.push('/progress') },
  ]

  return (
    <div className={styles.container}>
      <SidebarDesktop />
      <SidebarMobile />
    </div>
  )
}
