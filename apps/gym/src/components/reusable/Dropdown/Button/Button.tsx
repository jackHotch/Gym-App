import styles from './Button.module.css'
import { DropdownProps } from '../Dropdown'

export const Button = ({ sx, children, ...props }: DropdownProps) => {
  return (
    <div className={styles.container} style={sx} {...props}>
      {children}
    </div>
  )
}
