import styles from './modal.module.css'

export interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export function Description({ children, sx, ...props }: DescriptionProps) {
  return (
    <div style={sx} className={styles.description} {...props}>
      {children}
    </div>
  )
}
