import styles from './PageWrapper.module.css'
import { PageWrapperProps } from '@/types'

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className={styles.container}>{children}</div>
}
