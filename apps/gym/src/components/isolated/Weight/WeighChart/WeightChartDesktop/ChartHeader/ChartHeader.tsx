import styles from './CharHeader.module.css'
import { ChartHeaderProps } from '@/types'
import { AddWeightModal } from '@/components/isolated/Weight/AddWeightModal'
import UpArrow from '@mui/icons-material/KeyboardDoubleArrowUp'
import DownArrow from '@mui/icons-material/KeyboardDoubleArrowDown'
import { TailSpin } from 'react-loader-spinner'
import { useState } from 'react'

export const ChartHeader = ({
  startingWeight,
  endingWeight,
  isEmpty,
}: ChartHeaderProps) => {
  const [showAddWeightModal, setShowAddWeightModal] = useState(false)

  return (
    <div>
      <div className={styles.container}>
        <div style={{ position: 'absolute', left: 0 }}>
          <AddWeightModal open={showAddWeightModal} setOpen={setShowAddWeightModal} />
        </div>

        <div className={styles.stats}>
          <span className={styles.data}>
            {startingWeight ? (
              startingWeight
            ) : isEmpty ? (
              '-'
            ) : (
              <TailSpin color='var(--color-primary)' width='50' height='20' />
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
              <TailSpin color='var(--color-primary)' width='50' height='20' />
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
              <TailSpin color='var(--color-primary)' width='50' height='20' />
            )}
          </span>

          <span className={styles.label}>Diff</span>
        </div>
      </div>
    </div>
  )
}
