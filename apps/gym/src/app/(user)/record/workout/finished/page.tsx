'use client'

import styles from './Finished.module.css'
import { useWorkoutNumber } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { useRouter } from 'next/navigation'

const Finished = () => {
  const { data: workoutNumber } = useWorkoutNumber()
  const router = useRouter()

  return (
    <div className={styles.created}>
      <p>Workout #{workoutNumber} Recorded!</p>
      <Button.Primary
        size='medium'
        sx={{ marginTop: '30px' }}
        onClick={() => router.push('/record')}
      >
        Done
      </Button.Primary>
    </div>
  )
}

export default Finished
