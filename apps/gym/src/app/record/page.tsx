'use client'

import styles from './Record.module.css'
import Link from 'next/link'
import { useCurrentSplit } from '@/hooks'

const Record = () => {
  const { data: currentSplit } = useCurrentSplit()

  return (
    <>
      <div>
        <h2 className={styles.split_name}>{currentSplit?.name}</h2>
      </div>

      <div className={styles.log_workout}>
        <Link className={styles.button} href='/record/workout'>
          Start Workout
        </Link>
      </div>
    </>
  )
}

export default Record
