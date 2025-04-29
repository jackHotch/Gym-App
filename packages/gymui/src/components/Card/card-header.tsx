import styles from './Card.module.css'

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Header = ({ children, sx }: HeaderProps) => {
  return (
    <div style={sx} className={styles.header_container}>
      {children}
    </div>
  )
}
