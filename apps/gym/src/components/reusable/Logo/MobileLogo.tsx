import styles from './Logo.module.css'
import { DESKTOP_NAV_OPTIONS } from '@/constants'
import Link from 'next/link'

export const MobileLogo = () => {
  return (
    <Link
      key={1}
      className={styles.mobile_container}
      href={DESKTOP_NAV_OPTIONS[0].path}
      style={{ backgroundColor: 'white' }}
    >
      <img src='/images/dumbbell-blue.png' alt='logo' width={60} height={60} />
    </Link>
  )
}
