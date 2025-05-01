import styles from './overlay.module.css'
import { CloseIcon } from '../CloseIcon/CloseIcon'
import { useOverlayContext } from './overlay-context'

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export function Header({ children, sx, ...props }: HeaderProps) {
  const { onOpenChange } = useOverlayContext()

  return (
    <div style={sx} className={styles.header_container} {...props}>
      <div className={styles.header_text_container}>{children}</div>
      <CloseIcon onClick={() => onOpenChange(false)} />
    </div>
  )
}
