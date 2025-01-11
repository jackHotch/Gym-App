import styles from './NavLink.module.css'
import { NavLinkProps } from '@/types'
import Link from 'next/link'

export const NavLink = ({ path, containerSx, textSx, children }: NavLinkProps) => {
  return (
    <Link href={path} className={styles.container} style={containerSx}>
      <div style={textSx} className={styles.link_text}>
        {children}
      </div>
    </Link>
  )
}
