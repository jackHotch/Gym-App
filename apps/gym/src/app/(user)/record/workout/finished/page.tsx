'use client'

import { useWorkoutNumber } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { useRouter } from 'next/navigation'

const Finished = () => {
  const { data: workout } = useWorkoutNumber()
  const router = useRouter()

  return (
    <div className='flex-center'>
      <p className='text-3xl'>Workout #{workout?.count + 1} Recorded!</p>
      <Button.Primary size='xlarge' onClick={() => router.push('/record')}>
        Done
      </Button.Primary>
    </div>
  )
}

export default Finished
