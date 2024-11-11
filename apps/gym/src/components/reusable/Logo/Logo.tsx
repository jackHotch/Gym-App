import styles from './Logo.module.css'
import Image from 'next/image'
import { navOptions } from '@/constants'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link className={styles.container} href={navOptions[0].path}>
      <Image src='/images/dumbbell-blue.png' alt='logo' width={25} height={25} />
      Gym App
    </Link>
  )
}
