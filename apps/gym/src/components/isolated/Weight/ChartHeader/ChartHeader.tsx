import { useToggle } from '@/hooks'
import styles from './CharHeader.module.css'
import { Button } from '@gymapp/gymui/Button'
import { AnimatePresence } from 'framer-motion'
import { AddWeightModal } from '../AddWeightModal'
import UpArrow from '@mui/icons-material/KeyboardDoubleArrowUp'
import DownArrow from '@mui/icons-material/KeyboardDoubleArrowDown'
import TrendingDownArrow from '@mui/icons-material/TrendingDown'
import TrendingUpArrow from '@mui/icons-material/TrendingUp'

interface ChartHeaderProps {
  startingWeight: number
  endingWeight?: number
}

export const ChartHeader = ({ startingWeight, endingWeight }: ChartHeaderProps) => {
  const [isAWMOpen, , openAWM, closeAWM] = useToggle()
  return (
    <div>
      <div className={styles.container}>
        <Button.Primary
          onClick={openAWM}
          sx={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center' }}
        >
          Add
          <span className={styles.plus}>+</span>
        </Button.Primary>

        <div className={styles.stats}>
          <span className={styles.data}>{startingWeight}</span>
          <span className={styles.label}>Start</span>
        </div>

        <div className={styles.stats}>
          <span className={styles.data}>
            {endingWeight}
            <span className={styles.arrow}>
              {endingWeight > startingWeight ? (
                <UpArrow color='success' />
              ) : (
                <DownArrow color='warning' />
              )}
            </span>
          </span>

          <span className={styles.label}>End</span>
        </div>

        <div className={styles.stats}>
          <span className={styles.data}>
            {(endingWeight - startingWeight).toFixed(1)}
            <span className={styles.arrow}>
              {endingWeight > startingWeight ? (
                <TrendingUpArrow color='success' />
              ) : (
                <TrendingDownArrow color='warning' />
              )}
            </span>
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
