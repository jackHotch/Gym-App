import { NavLinkProps } from '@/types'
import { useRouter } from 'next/navigation'

export const NavLink = ({
  path,
  closeMenu,
  containerSx,
  textSx,
  children,
}: NavLinkProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (closeMenu) closeMenu()
    router.push(path)
  }

  return (
    <div onClick={handleClick} style={containerSx}>
      <div style={textSx} className='flex items-center gap-4'>
        {children}
      </div>
    </div>
  )
}
