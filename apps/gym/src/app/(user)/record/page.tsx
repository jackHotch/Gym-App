'use client'

import Link from 'next/link'
import { useCurrentSplit } from '@/hooks/api/useCurrentSplit'
import { Loading } from '@gymapp/gymui/Loading'
import { Button } from '@gymapp/gymui/Button'

const Record = () => {
  const { data: currentSplit, isLoading } = useCurrentSplit()
  const isEmpty = !isLoading && !currentSplit

  return (
    <div className='flex w-full flex-col items-center justify-center gap-16 my-12'>
      {isLoading ? (
        <Loading.Text
          fontSize='3rem'
          pulseSize={12}
          sx={{ gap: '20px', height: '57.5px' }}
        >
          Getting your Current Split
        </Loading.Text>
      ) : isEmpty ? (
        <h1 className='text-center font-semibold text-5xl md:text-7xl tracking-tight'>
          No Split Created
        </h1>
      ) : (
        <h1 className='text-center font-semibold text-5xl md:text-7xl tracking-tight'>
          {currentSplit?.name}
        </h1>
      )}
      <Link href='/record/workout'>
        <Button size='xl'>Start Workout</Button>
      </Link>
    </div>
  )
}

export default Record
