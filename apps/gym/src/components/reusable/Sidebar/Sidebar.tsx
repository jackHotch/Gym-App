'use client'

import { DESKTOP_NAV_OPTIONS } from '@/constants'
import { DesktopLogo } from '../Logo/DesktopLogo'
import { motion } from 'motion/react'
import { NavLink } from '../NavLink/NavLink'
import { NavBackground } from './NavBackground/NavBackground'
import { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { signout } from '@/actions/auth'

export const Sidebar = () => {
  const [focused, setFocused] = useState<string | null>(null)

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault()
    await signout()
  }

  return (
    <motion.div
      className='
        fixed top-0 right-auto bottom-0 left-0 z-9999999 md:flex
        w-14 flex-col gap-2 overflow-hidden
        border-r border-light-gray bg-white p-2
        hidden
      '
      whileHover={{ width: 190 }}
    >
      <DesktopLogo />

      <div className='flex flex-col gap-2' onMouseLeave={() => setFocused(null)}>
        {DESKTOP_NAV_OPTIONS.map((option, key) => {
          if (option.name === 'Home') return null

          return (
            <div
              key={key}
              onMouseEnter={() => setFocused(option.name)}
              className='relative'
            >
              <NavLink path={option.path}>
                <div className='flex items-center gap-4 text-md p-2 cursor-pointer'>
                  {option.icon}
                  {option.name}
                </div>
                {focused === option.name && <NavBackground />}
              </NavLink>
            </div>
          )
        })}
      </div>

      <div
        className='
          absolute bottom-4 flex cursor-pointer items-center gap-4 rounded-lg p-2 text-danger
          hover:bg-light-gray w-[calc(100%-16px)]
        '
        onClick={handleLogout}
      >
        <LogoutIcon />
        Logout
      </div>
    </motion.div>
  )
}
