import { useOverlayContext } from './overlay-context'
import styles from './overlay.module.css'

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  sx?: React.CSSProperties
}

export function Content({ children, sx, ...props }: ContentProps) {
  const { open, onOpenChange } = useOverlayContext()

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
