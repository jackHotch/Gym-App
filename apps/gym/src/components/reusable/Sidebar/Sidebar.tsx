'use client'

import styles from './Sidebar.module.css'
import { SidebarProps } from '@/types'
import { navOptions } from '@/constants'
import Link from 'next/link'
import { Logo } from '../Logo/Logo'
import { motion } from 'framer-motion'

export const Sidebar = ({}: SidebarProps) => {
  const MotionLink = motion(Link)
  return (
    <motion.div className={styles.container} whileHover={{ width: '190px' }}>
      {navOptions.map((option, key) => {
        if (option.name === 'Home') return <Logo key={key} />

        return (
          <MotionLink
            key={key}
            href={option.path}
            className={styles.link}
            whileHover={{
              backgroundColor: 'var(--light-gray)',
              transition: {
                duration: 1,
              },
            }}
          >
            <div className={styles.link_text}>
              {option.icon}
              {option.name}
            </div>
          </MotionLink>
        )
      })}
    </motion.div>
  )
}