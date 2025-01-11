import styles from './Logo.module.css'
import { DESKTOP_NAV_OPTIONS } from '@/constants'
import Link from 'next/link'

export const MobileLogo = () => {
  return (
    <Link key={1} className={styles.container} href={DESKTOP_NAV_OPTIONS[0].path}>
      <img src='/images/dumbbell-blue.png' alt='logo' width={60} height={60} />
      <span className={styles.mobile_brand}>JACKED</span>
    </Link>
  )
}
