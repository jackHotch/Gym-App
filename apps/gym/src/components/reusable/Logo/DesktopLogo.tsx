import styles from './Logo.module.css'
import { DESKTOP_NAV_OPTIONS } from '@/constants'
import Link from 'next/link'

export const DesktopLogo = () => {
  return (
    <Link key={1} className={styles.desktop_container} href={DESKTOP_NAV_OPTIONS[0].path}>
      <img src='/images/dumbbell-blue.png' alt='logo' width={25} height={25} />
      <span className={styles.desktop_brand}>JACKED</span>
    </Link>
  )
}
