import styles from './Logo.module.css'
import { NavOptions } from '@/constants'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link key={1} className={styles.container} href={NavOptions[0].path}>
      <img src='/images/dumbbell-blue.png' alt='logo' width={25} height={25} />
      <span>JACKED</span>
    </Link>
  )
}
