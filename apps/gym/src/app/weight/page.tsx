'use client'

import styles from './Weight.module.css'
import { WeightChart, WeightList } from '@/components/isolated/Weight'

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
