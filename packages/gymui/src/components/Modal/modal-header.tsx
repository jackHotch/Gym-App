import styles from './modal.module.css'
import { CloseIcon } from '../CloseIcon/CloseIcon'
import { useModalContext } from './modal-context'

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Header = ({ children, sx, ...props }: HeaderProps) => {
  const { onOpenChange } = useModalContext()

  return (
    <div style={sx} className={styles.header_container} {...props}>
      <div className={styles.header_text_container}>{children}</div>
      <CloseIcon onClick={() => onOpenChange(false)} />
    </div>
  )
}
