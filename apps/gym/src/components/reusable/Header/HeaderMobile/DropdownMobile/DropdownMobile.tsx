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
      initial={{ x: '100vw' }}
      animate={{
        x: 0,
        transition: {
          type: 'spring',
          damping: 16,
          stiffness: 135,
        },
      }}
      exit={{
        x: '100vw',
        transition: {
          default: {
            type: 'spring',
            damping: 16,
            stiffness: 135,
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
