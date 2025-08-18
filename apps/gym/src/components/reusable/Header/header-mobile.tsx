'use client'

import { HeaderMobileProps } from '@/types'
import { Hamburger } from '@gymapp/gymui/Hamburger'
import { useToggle } from '@/hooks'
import { DropdownMobile } from './dropdown-mobile'
import { DesktopLogo } from '../Logo/DesktopLogo'
import { AnimatePresence } from 'motion/react'

export const HeaderMobile = ({}: HeaderMobileProps) => {
  const [active, toggleMenu, , closeMenu] = useToggle()

  const toggleDropdown = () => {
    toggleMenu()
  }

  return (
    <div className='flex items-center justify-between px-2 md:hidden'>
      <DesktopLogo />
      <div>
        <Hamburger active={active} onClick={toggleDropdown} />
        <AnimatePresence>
          {active && <DropdownMobile closeMenu={closeMenu} />}
        </AnimatePresence>
      </div>
    </div>
  )
}
