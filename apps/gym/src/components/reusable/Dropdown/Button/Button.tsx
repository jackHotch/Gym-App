import styles from './Button.module.css'
import { DropdownProps } from '../Dropdown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { forwardRef, Ref } from 'react'

type reactRef = Ref<SVGSVGElement>

export const Button = forwardRef(
  ({ sx, children, ...props }: DropdownProps, ref: reactRef) => {
    return (
      <div {...props} className={styles.container} style={sx}>
        {children}
        <ExpandMoreIcon ref={ref} />
      </div>
    )
  }
)
