import styles from './DropdownMobile.module.css'
import { DropdownMobileProps } from '@/types'
import { MOBILE_NAV_OPTIONS } from '@/constants'
import { NavLink } from '@/components/reusable/Sidebar/NavLink/NavLink'
import { motion } from 'framer-motion'
import { MobileLogo } from '@/components/reusable/Logo/MobileLogo'

export const DropdownMobile = ({}: DropdownMobileProps) => {
  return (
    <motion.div className={styles.container}>
      <MobileLogo />

      {MOBILE_NAV_OPTIONS.map((option, id) => {
        if (option.name === 'Home') return

        return (
          <NavLink path={option.path} key={id} containerSx={{ width: '100%' }}>
            {option.icon}
            <span style={{ fontSize: 48 }}>{option.name}</span>
          </NavLink>
        )
      })}
    </motion.div>
  )
}
