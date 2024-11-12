import styles from './BodyWrapper.module.css'
import { BodyWrapperProps } from '@/types'

export const BodyWrapper = ({ children }: BodyWrapperProps) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
