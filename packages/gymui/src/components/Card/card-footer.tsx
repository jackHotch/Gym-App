import styles from './Card.module.css'

export interface FooterProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Footer = ({ children, sx, ...props }: FooterProps) => {
  return (
    <div style={sx} className={styles.footer} {...props}>
      {children}
    </div>
  )
}
