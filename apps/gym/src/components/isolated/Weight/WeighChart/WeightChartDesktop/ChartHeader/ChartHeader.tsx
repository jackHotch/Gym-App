import styles from './CharHeader.module.css'
import { ChartHeaderProps } from '@/types'
import { useToggle } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { AnimatePresence } from 'motion/react'
import { AddWeightModal } from '@/components/isolated/Weight/AddWeightModal'
import UpArrow from '@mui/icons-material/KeyboardDoubleArrowUp'
import DownArrow from '@mui/icons-material/KeyboardDoubleArrowDown'
import { TailSpin } from 'react-loader-spinner'
import AddIcon from '@mui/icons-material/Add'

export const ChartHeader = ({
  startingWeight,
  endingWeight,
  isEmpty,
}: ChartHeaderProps) => {
  const [isAWMOpen, , openAWM, closeAWM] = useToggle()

  return (
    <div>
      <div className={styles.container}>
        <Button.Primary onClick={openAWM} sx={{ position: 'absolute', left: 0 }}>
          Add
          <AddIcon />
        </Button.Primary>

        <div className={styles.stats}>
          <span className={styles.data}>
            {startingWeight ? (
              startingWeight
            ) : isEmpty ? (
              '-'
            ) : (
              <TailSpin color='var(--blue)' width='50' height='20' />
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
              <TailSpin color='var(--blue)' width='50' height='20' />
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
              <TailSpin color='var(--blue)' width='50' height='20' />
            )}
          </span>

          <span className={styles.label}>Diff</span>
        </div>
      </div>

      <AnimatePresence>
        {isAWMOpen && <AddWeightModal closeModal={closeAWM} />}
      </AnimatePresence>
    </div>
  )
}
