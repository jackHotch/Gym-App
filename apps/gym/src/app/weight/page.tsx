'use client'

import { useWeight } from '@/hooks'
import styles from './Weight.module.css'
import { WeightChart, WeightList } from '@/components/isolated/Weight'
import { getChartData } from '@/utils/utils'

const Weight = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <WeightChart />
        <WeightList />
      </div>
    </div>
  )
}

export default Weight
