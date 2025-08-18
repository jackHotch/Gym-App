import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

export const Header = ({}) => {
  return (
    <div className='border-light-gray border-b-1'>
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  )
}
