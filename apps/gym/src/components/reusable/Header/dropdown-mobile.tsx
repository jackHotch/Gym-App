import { DropdownMobileProps } from '@/types'
import { MOBILE_NAV_OPTIONS } from '@/constants'
import { NavLink } from '@/components/reusable/NavLink/NavLink'
import { motion } from 'motion/react'
import { MobileLogo } from '@/components/reusable/Logo/MobileLogo'
import LogoutIcon from '@mui/icons-material/Logout'
import { signout } from '@/actions/auth'

export const DropdownMobile = ({ closeMenu }: DropdownMobileProps) => {
  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault()
    await signout()
  }

  return (
    <motion.div
      className='
        absolute inset-0 z-1000000 flex flex-col gap-6
        overflow-hidden bg-primary p-2
      '
      initial={{ x: '100vw' }}
      animate={{
        x: 0,
        transition: {
          type: 'spring',
          damping: 16,
          stiffness: 135,
        },
      }}
      exit={{
        x: '100vw',
        transition: {
          default: {
            type: 'spring',
            damping: 16,
            stiffness: 135,
          },
        },
      }}
    >
      <MobileLogo />

      {MOBILE_NAV_OPTIONS.map((option, id) => {
        if (option.name === 'Home') return null

        return (
          <NavLink
            key={id}
            path={option.path}
            closeMenu={closeMenu}
            containerSx={{ width: '100%' }}
          >
            {option.icon}
            <h1 className='text-white text-5xl'>{option.name}</h1>
          </NavLink>
        )
      })}

      <div
        className='
          absolute bottom-4 ml-2 flex cursor-pointer items-center
          gap-4
        '
        onClick={handleLogout}
      >
        <LogoutIcon sx={{ fontSize: 60, color: 'white' }} />
        <span className='text-white text-[3rem]'>Logout</span>
      </div>
    </motion.div>
  )
}
