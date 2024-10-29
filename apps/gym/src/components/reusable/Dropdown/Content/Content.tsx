import styles from './Content.module.css'
import { DropdownProps } from '../Dropdown'

export const Content = ({ sx, children, ...props }: DropdownProps) => {
  return (
    <div className={styles.container} style={sx} {...props}>
      {children}
    </div>
  )
}
