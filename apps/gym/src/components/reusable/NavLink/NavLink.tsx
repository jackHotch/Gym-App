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
    <div onClick={handleClick} style={containerSx} className=''>
      <div style={textSx}>{children}</div>
    </div>
  )
}
