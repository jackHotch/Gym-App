import styles from '../HeaderCards.module.css'
import { DifferenceCardProps } from '@/types'
import { TailSpin } from 'react-loader-spinner'
import UpArrow from '@mui/icons-material/KeyboardDoubleArrowUp'
import DownArrow from '@mui/icons-material/KeyboardDoubleArrowDown'

export const DifferenceCard = ({
  difference,
  gainedWeight,
  isEmpty,
}: DifferenceCardProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.data}>
        {isEmpty ? (
          '-'
        ) : difference ? (
          <span
            style={{
              color: gainedWeight ? 'var(--color-success) ' : 'var(--color-danger)',
            }}
          >
            {difference}
          </span>
        ) : (
          <TailSpin color='var(--color-primary)' width='50' height='20' />
        )}
        {!isEmpty && (
          <span className={styles.arrow}>
            {gainedWeight ? (
              <UpArrow htmlColor='var(--color-success)' />
            ) : (
              <DownArrow htmlColor='var(--color-danger)' />
            )}
          </span>
        )}
      </span>
      <span className={styles.label}>Diff</span>
    </div>
  )
}
