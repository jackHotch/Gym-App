import { CSSProperties } from 'react'
import styles from './popover.module.css'

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: CSSProperties
  children?: string
}

export const Item = ({ sx, children, ...props }: ItemProps) => {
  return (
    <div style={sx} className={styles.item_container} {...props}>
      {children}
    </div>
  )
}
