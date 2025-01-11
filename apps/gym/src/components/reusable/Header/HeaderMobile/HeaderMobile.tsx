'use client'

import styles from './HeaderMobile.module.css'
import { HeaderMobileProps } from '@/types'
import { Hamburger } from '@gymapp/gymui/Hamburger'
import { useToggle } from '@/hooks'
import { DropdownMobile } from './DropdownMobile/DropdownMobile'
import { DesktopLogo } from '../../Logo/DesktopLogo'
import { AnimatePresence } from 'framer-motion'

export const HeaderMobile = ({}: HeaderMobileProps) => {
  const [active, toggleMenu, , closeMenu] = useToggle()

  const toggleDropdown = () => {
    toggleMenu()
  }

  return (
    <div className={styles.container}>
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
