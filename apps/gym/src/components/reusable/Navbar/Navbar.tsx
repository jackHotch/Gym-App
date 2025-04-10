'use client'

import styles from './Navbar.module.css'
import { DesktopLogo } from '../Logo/DesktopLogo'
import { Button } from '@gymapp/gymui/Button'
import { usePathname, useRouter } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const authNavbarPathnames = [
    '/',
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password',
  ]

  if (!authNavbarPathnames.includes(pathname)) return null

  return (
    <div className={styles.container}>
      <DesktopLogo />
      <div className={styles.button_container}>
        {pathname == '/' && (
          <>
            <Button.Secondary onClick={() => router.push('/login')}>
              Log In
            </Button.Secondary>
            <Button.Primary onClick={() => router.push('/signup')}>
              Sign Up
            </Button.Primary>
          </>
        )}

        {pathname == '/login' && (
          <Button.Primary onClick={() => router.push('/signup')}>Sign Up</Button.Primary>
        )}

        {(pathname == '/signup' ||
          pathname == '/forgot-password' ||
          pathname == '/reset-password') && (
          <Button.Primary onClick={() => router.push('/login')}>Log In</Button.Primary>
        )}
      </div>
    </div>
  )
}
