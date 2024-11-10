import styles from './Header.module.css'
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'

export const Header = ({}) => {
  // has info like how much weight I have gained, best lift of the week...
  return (
    <div className={styles.container}>
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  )
}
