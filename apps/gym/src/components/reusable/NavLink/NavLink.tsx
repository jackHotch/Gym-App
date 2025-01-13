import styles from './NavLink.module.css'
import { NavLinkProps } from '@/types'
import { useRouter } from 'next/navigation'

export const NavLink = ({
  path,
  closeMenu,
  containerSx,
  textSx,
  children,
}: NavLinkProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (closeMenu) closeMenu()
    router.push(path)
  }

  return (
    <div onClick={handleClick} className={styles.container} style={containerSx}>
      <div style={textSx} className={styles.link_text}>
        {children}
      </div>
    </div>
  )
}
