'use client'

import styles from './Weight.module.css'
import { WeightList } from '@/components/isolated/Weight'
import { Chart } from '@/components/reusable/Chart/Chart'
import { useWeight } from '@/hooks'
import { convertDate } from '@/utils/utils'

const Weight = () => {
  const { data, isLoading } = useWeight()
  const weightData = convertDate(data)

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <WeightList weight={weightData} isLoading={isLoading} />
        <Chart weight={weightData} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default Weight
