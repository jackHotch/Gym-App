import styles from './Header.module.css'
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'

export const Header = ({}) => {
  return (
    <div className={styles.container}>
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  )
}
