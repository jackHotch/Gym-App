import styles from './Button.module.css'
import { DropdownProps } from '../Dropdown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const Button = ({ sx, children, ...props }: DropdownProps) => {
  return (
    <div className={styles.container} style={sx} {...props}>
      {children} <ExpandMoreIcon />
    </div>
  )
}
