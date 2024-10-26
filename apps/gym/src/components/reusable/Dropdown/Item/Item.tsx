import styles from './Item.module.css'
import { DropdownProps } from '../Dropdown'

export interface ItemProps extends DropdownProps {
  updateChart?: () => void
}

export const Item = ({ sx, children, ...props }: DropdownProps) => {
  return (
    <div style={sx} {...props}>
      {children}
    </div>
  )
}
