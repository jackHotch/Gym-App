'use client'

import styles from './Logo.module.css'
import { MOBILE_NAV_OPTIONS, unauthorizedUrls } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MobileLogo = () => {
  const pathname = usePathname()
  const href = unauthorizedUrls.includes(pathname) ? '/' : MOBILE_NAV_OPTIONS[0].path

  return (
    <Link
      key={1}
      className={styles.mobile_container}
      href={href}
      style={{ backgroundColor: 'white' }}
    >
      <img src='/images/dumbbell-blue.png' alt='logo' width={60} height={60} />
    </Link>
  )
}
