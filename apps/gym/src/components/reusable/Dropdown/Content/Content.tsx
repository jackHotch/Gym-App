import styles from './Content.module.css'
import { DropdownProps } from '../Dropdown'

export const Content = ({ sx, children }: DropdownProps) => {
  return (
    <div className={styles.container} style={sx}>
      {children}
    </div>
  )
}
