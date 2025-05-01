import styles from './modal.module.css'
import { useModalContext } from './modal-context'

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  sx?: React.CSSProperties
}

export function Content({ children, sx, ...props }: ContentProps) {
  const { open, onOpenChange } = useModalContext()

  if (!open) return null

  return (
    <div
      style={sx}
      className={styles.background}
      onClick={() => onOpenChange(false)}
      {...props}
    >
      <div className={styles.content_container} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
