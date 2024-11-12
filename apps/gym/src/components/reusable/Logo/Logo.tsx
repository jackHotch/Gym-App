import styles from './Logo.module.css'
import Image from 'next/image'
import { NavOptions } from '@/constants'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link className={styles.container} href={NavOptions[0].path}>
      <Image src='/images/dumbbell-blue.png' alt='logo' width={25} height={25} />
      <span>Gym App</span>
    </Link>
  )
}
