import styles from './modal.module.css'

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export function Footer({ children, sx, ...props }: FooterProps) {
  return (
    <div style={sx} className={styles.footer} {...props}>
      {children}
    </div>
  )
}
