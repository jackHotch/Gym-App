'use client'

import styles from './HeaderMobile.module.css'
import { HeaderMobileProps } from '@/types'
import { Logo } from '../../Logo/Logo'
import { Hamburger } from '@gymapp/gymui/Hamburger'
import { useToggle } from '@/hooks'

export const HeaderMobile = ({}: HeaderMobileProps) => {
  const [active, toggleMenu] = useToggle()

  const toggleDropdown = () => {
    toggleMenu()
  }

  return (
    <div className={styles.container}>
      <Logo />
      <Hamburger active={active} onClick={toggleDropdown} />
    </div>
  )
}
