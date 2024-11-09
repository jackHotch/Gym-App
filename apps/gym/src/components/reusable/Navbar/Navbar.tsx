'use client'

import styles from './Navbar.module.css'
import { Logo } from './Logo/Logo'
import { TabList } from '@gymapp/gymui/TabList'
import { ProfileIcon } from './ProfileIcon/ProfileIcon'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const router = useRouter()
  const options = [
    { name: 'Splits', href: () => router.push('/splits') },
    { name: 'Record', href: () => router.push('/record') },
    { name: 'Weight', href: () => router.push('/weight') },
    { name: 'Progress', href: () => router.push('/progress') },
  ]

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Logo />
        <TabList options={options} />
        <ProfileIcon />
      </nav>
    </div>
  )
}
