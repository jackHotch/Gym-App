import styles from './CharHeader.module.css'
import { ChartHeaderProps } from '@/types'
import { useToggle } from '@/hooks'
import { AddWeightModal } from '@/components/isolated/Weight/AddWeightModal'
import UpArrow from '@mui/icons-material/KeyboardDoubleArrowUp'
import DownArrow from '@mui/icons-material/KeyboardDoubleArrowDown'
import { TailSpin } from 'react-loader-spinner'

export const ChartHeader = ({
  startingWeight,
  endingWeight,
  isEmpty,
}: ChartHeaderProps) => {
  const [showAddWeightModal, setShowAddWeightModal] = useToggle()

  return (
    <div>
      <div className={styles.container}>
        <AddWeightModal open={showAddWeightModal} setOpen={setShowAddWeightModal} />

        <div className={styles.stats}>
          <span className={styles.data}>
            {startingWeight ? (
              startingWeight
            ) : isEmpty ? (
              '-'
            ) : (
              <TailSpin color='var(--primary)' width='50' height='20' />
            )}
          </span>
          <span className={styles.label}>Start</span>
        </div>

        <div className={styles.stats}>
          <span className={styles.data}>
            {endingWeight ? (
              endingWeight
            ) : isEmpty ? (
              '-'
            ) : (
              <TailSpin color='var(--primary)' width='50' height='20' />
            )}
          </span>

          <span className={styles.label}>End</span>
        </div>

        <div className={styles.stats}>
          <span className={styles.data}>
            {startingWeight && endingWeight ? (
              <>
                {(endingWeight - startingWeight).toFixed(1)}
                <span className={styles.arrow}>
                  {endingWeight > startingWeight ? (
                    <UpArrow color='success' />
                  ) : (
                    <DownArrow color='warning' />
                  )}
                </span>
              </>
            ) : isEmpty ? (
              '-'
            ) : (
              <TailSpin color='var(--primary)' width='50' height='20' />
            )}
          </span>

          <span className={styles.label}>Diff</span>
        </div>
      </div>
    </div>
  )
}
