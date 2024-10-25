import { CSSProperties } from 'react'
import styles from './Item.module.css'
import { HTMLMotionProps } from 'framer-motion'

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: CSSProperties
  children?: string
}

export const Item = ({ sx, children, ...props }: ItemProps) => {
  return (
    <div style={sx} className={styles.container} {...props}>
      {children}
    </div>
  )
}