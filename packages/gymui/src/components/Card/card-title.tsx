import styles from './Card.module.css'

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  sx?: React.CSSProperties
}

export const Title = ({ children, sx, ...props }: TitleProps) => {
  return (
    <p style={sx} className={styles.title} {...props}>
      {children}
    </p>
  )
}
