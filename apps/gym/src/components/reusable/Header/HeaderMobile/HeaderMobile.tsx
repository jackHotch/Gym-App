import { Logo } from '../../Logo/Logo'
import styles from './HeaderMobile.module.css'
import { HeaderMobileProps } from '@/types'

export const HeaderMobile = ({}: HeaderMobileProps) => {
  return (
    <div className={styles.container}>
      <Logo />
      <p>ham</p>
    </div>
  )
}
