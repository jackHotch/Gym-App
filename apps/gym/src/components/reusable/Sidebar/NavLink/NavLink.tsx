import styles from './NavLink.module.css'
import { NavLinkProps } from '@/types'
import Link from 'next/link'

export const NavLink = ({ path, children }: NavLinkProps) => {
  return (
    <Link href={path} className={styles.link}>
      <div className={styles.link_text}>{children}</div>
    </Link>
  )
}
