import styles from './HeaderDesktop.module.css'
import { HeaderDesktopProps } from '@/types'

export const HeaderDesktop = ({}: HeaderDesktopProps) => {
  // Show info like weight gained this month, best lift this week, next workout
  return (
    <div className={styles.container}>
      <span>Stats</span>
    </div>
  )
}
