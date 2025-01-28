import { useEffect, useState } from 'react'
import { DifferenceCard } from '../../../HeaderCards/DifferenceCard/DifferenceCard'
import { EndingCard } from '../../../HeaderCards/EndingCard/EndingCard'
import { StartingCard } from '../../../HeaderCards/StartingCard/StartingCard'
import styles from './ChartHeader.module.css'
import { ChartHeaderProps } from '@/types'

export const ChartHeader = ({ startingWeight, endingWeight }: ChartHeaderProps) => {
  const [gainedWeight, setGainedWeight] = useState(false)

  useEffect(() => {
    setGainedWeight(endingWeight > startingWeight ? true : false)
  }, [startingWeight, endingWeight])

  return (
    <div className={styles.container}>
      <StartingCard weight={startingWeight} gainedWeight={gainedWeight} />
      <EndingCard weight={endingWeight} gainedWeight={gainedWeight} />
      <DifferenceCard
        difference={(endingWeight - startingWeight).toFixed(1)}
        gainedWeight={gainedWeight}
      />
    </div>
  )
}
