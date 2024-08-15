'use client'

import styles from './Finished.module.css'
import Link from 'next/link'
import { useWorkoutNumber } from '@/hooks'

const finished = () => {
  const { data: workoutNumber } = useWorkoutNumber()

  return (
    <div className={styles.created}>
      <p>Workout #{workoutNumber} Recorded!</p>
      <Link className={styles.home_link} href={'/record'}>
        Done
      </Link>
    </div>
  )
}

export default finished
