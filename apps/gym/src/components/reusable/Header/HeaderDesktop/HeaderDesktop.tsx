'use client'

import { useCurrentWeight } from '@/hooks/api/useCurrentWeight'
import styles from './HeaderDesktop.module.css'
import { HeaderDesktopProps } from '@/types'
import { useCurrentSplit } from '@/hooks/api/useCurrentSplit'

export const HeaderDesktop = ({}: HeaderDesktopProps) => {
  const { data: currentWeight } = useCurrentWeight()
  const { data: currentSplit } = useCurrentSplit()

  return (
    <div className={styles.container}>
      <div>
        {currentWeight?.weight}lbs
        <span className={styles.label}> | Weight </span>
      </div>
      <div>
        {currentSplit?.name}
        <span className={styles.label}> | Current Split </span>
      </div>
      <div>
        Chest and Triceps
        <span className={styles.label}> | Next Workout </span>
      </div>
    </div>
  )
}
