'use client'

import styles from './HeaderMobile.module.css'
import { HeaderMobileProps } from '@/types'
import { Hamburger } from '@gymapp/gymui/Hamburger'
import { useToggle } from '@/hooks'
import { DropdownMobile } from './DropdownMobile/DropdownMobile'
import { DesktopLogo } from '../../Logo/DesktopLogo'

export const HeaderMobile = ({}: HeaderMobileProps) => {
  const [active, toggleMenu] = useToggle()

  const toggleDropdown = () => {
    toggleMenu()
  }

  return (
    <div className={styles.container}>
      <DesktopLogo />
      <div>
        <Hamburger active={active} onClick={toggleDropdown} />
        {active && <DropdownMobile />}
      </div>
    </div>
  )
}
