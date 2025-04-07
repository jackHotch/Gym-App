import styles from './DropdownMobile.module.css'
import { DropdownMobileProps } from '@/types'
import { MOBILE_NAV_OPTIONS } from '@/constants'
import { NavLink } from '@/components/reusable/NavLink/NavLink'
import { motion } from 'motion/react'
import { MobileLogo } from '@/components/reusable/Logo/MobileLogo'
import LogoutIcon from '@mui/icons-material/Logout'
import { signout } from '@/actions/auth'

export const DropdownMobile = ({ closeMenu }: DropdownMobileProps) => {
  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault()
    await signout()
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ scale: 0, originX: 1, originY: 0 }}
      animate={{
        x: 8,
        y: -16,
        scale: 1,
        transition: {
          type: 'spring',
          damping: 14,
          duration: 0.75,
        },
      }}
      exit={{
        scale: 0,
        x: -8,
        y: 16,
        opacity: 0,
        transition: {
          default: {
            type: 'spring',
            damping: 14,
            duration: 0.75,
          },
          opacity: {
            duration: 0.5,
          },
        },
      }}
    >
      <MobileLogo />

      {MOBILE_NAV_OPTIONS.map((option, id) => {
        if (option.name === 'Home') return

        return (
          <NavLink
            closeMenu={closeMenu}
            path={option.path}
            key={id}
            containerSx={{ width: '100%' }}
          >
            {option.icon}
            <h1 className={styles.option}>{option.name}</h1>
          </NavLink>
        )
      })}

      <div className={styles.logout} onClick={handleLogout}>
        <LogoutIcon sx={{ fontSize: 60, color: 'white' }} />
        <span className={styles.option}>Logout</span>
      </div>
    </motion.div>
  )
}
