'use client'

import styles from './Logo.module.css'
import { DESKTOP_NAV_OPTIONS, unauthorizedUrls } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const DesktopLogo = () => {
  const pathname = usePathname()
  const href = unauthorizedUrls.includes(pathname) ? '/' : DESKTOP_NAV_OPTIONS[0].path

  return (
    <Link key={1} className={styles.desktop_container} href={href}>
      <img src='/images/dumbbell-blue.png' alt='logo' width={25} height={25} />
      <span className={styles.desktop_brand}>JACKED</span>
    </Link>
  )
}
