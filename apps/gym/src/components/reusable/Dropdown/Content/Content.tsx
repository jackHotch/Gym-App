import styles from './Content.module.css'
import { DropdownProps } from '../Dropdown'
import { ForwardedRef, forwardRef } from 'react'

type reactRef = ForwardedRef<HTMLDivElement>

export const Content = forwardRef(
  ({ sx, children, ...props }: DropdownProps, ref: reactRef) => {
    return (
      <div ref={ref} className={styles.container} style={sx} {...props}>
        {children}
      </div>
    )
  }
)
