'use client'

import styles from './Sidebar.module.css'
import { useRouter } from 'next/navigation'

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
      <nav className={styles.sidebar}>sidebar</nav>
    </div>
  )
}
