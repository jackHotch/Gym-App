import styles from '../HeaderCards.module.css'
import { DifferenceCardProps } from '@/types'
import { TailSpin } from 'react-loader-spinner'
import UpArrow from '@mui/icons-material/KeyboardDoubleArrowUp'
import DownArrow from '@mui/icons-material/KeyboardDoubleArrowDown'

export const DifferenceCard = ({ difference, gainedWeight }: DifferenceCardProps) => {
  return (
    <div
      className={styles.container}
      style={{
        color: gainedWeight ? 'var(--green) ' : 'var(--red)',
      }}
    >
      <span className={styles.data}>
        {difference ? (
          difference
        ) : (
          <TailSpin color='var(--blue)' width='50' height='20' />
        )}
        <span className={styles.arrow}>
          {gainedWeight ? (
            <UpArrow htmlColor='var(--green)' />
          ) : (
            <DownArrow color='warning' />
          )}
        </span>
      </span>
      <span className={styles.label}>Diff</span>
    </div>
  )
}
