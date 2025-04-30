import styles from './Card.module.css'

export interface DescriptionProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  sx?: React.CSSProperties
}

export const Description = ({ children, sx, ...props }: DescriptionProps) => {
  return (
    <p style={sx} className={styles.description} {...props}>
      {children}
    </p>
  )
}
