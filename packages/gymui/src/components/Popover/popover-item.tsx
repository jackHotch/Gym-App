import { CSSProperties } from 'react'
import styles from './popover.module.css'

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: CSSProperties
  children?: string
  variant?: 'default' | 'danger'
}

export const Item = ({ variant = 'default', sx, children, ...props }: ItemProps) => {
  return (
    <div style={sx} className={`${styles[variant]} ${styles.item_container}`} {...props}>
      {children}
    </div>
  )
}
