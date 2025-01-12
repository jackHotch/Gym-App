'use client'

import styles from './Sidebar.module.css'
import { DESKTOP_NAV_OPTIONS } from '@/constants'
import { DesktopLogo } from '../Logo/DesktopLogo'
import { motion } from 'motion/react'
import { NavLink } from './NavLink/NavLink'
import { NavBackground } from './NavBackground/NavBackground'
import { useState } from 'react'

export const Sidebar = () => {
  const [focused, setFocused] = useState(null)
  return (
    <motion.div className={styles.container} whileHover={{ width: '190px' }}>
      <DesktopLogo />

      <div className={styles.nav_container} onMouseLeave={() => setFocused(null)}>
        {DESKTOP_NAV_OPTIONS.map((option, key) => {
          if (option.name === 'Home') return

          return (
            <div key={key} onMouseEnter={() => setFocused(option.name)}>
              <NavLink path={option.path}>
                <div className={styles.text}>
                  {option.icon}
                  {option.name}
                </div>
                {focused === option.name && <NavBackground />}
              </NavLink>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
