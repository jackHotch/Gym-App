import styles from './Card.module.css'

export interface ContentProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Content = ({ children, sx }: ContentProps) => {
  return (
    <div style={sx} className={styles.card_content}>
      {children}
    </div>
  )
}
