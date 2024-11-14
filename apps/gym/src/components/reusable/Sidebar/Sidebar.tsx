'use client'

import styles from './Sidebar.module.css'
import { NavOptions } from '@/constants'
import { Logo } from '../Logo/Logo'
import { motion } from 'framer-motion'
import { NavLink } from './NavLink/NavLink'
import { NavBackground } from './NavBackground/NavBackground'
import { useState } from 'react'

export const Sidebar = () => {
  const [focused, setFocused] = useState(null)
  return (
    <motion.div className={styles.container} whileHover={{ width: '190px' }}>
      <Logo />

      <div className={styles.nav_container} onMouseLeave={() => setFocused(null)}>
        {NavOptions.map((option, key) => {
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
