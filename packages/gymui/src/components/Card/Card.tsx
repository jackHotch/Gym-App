import styles from './Card.module.css'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[]
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.container}>{children}</div>
}
