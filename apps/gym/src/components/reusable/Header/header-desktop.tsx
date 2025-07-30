'use client'

import { useCurrentWeight } from '@/hooks/api/useCurrentWeight'
import { HeaderDesktopProps } from '@/types'
import { useCurrentSplit } from '@/hooks/api/useCurrentSplit'
import Link from 'next/link'
import { Button } from '@gymapp/gymui/Button'
import ClipLoader from 'react-spinners/ClipLoader'

export const HeaderDesktop = ({}: HeaderDesktopProps) => {
  const {
    data: currentWeight,
    isLoading: isWeightLoading,
    isEmpty: isWeightEmpty,
  } = useCurrentWeight()
  const {
    data: currentSplit,
    isLoading: isSplitLoading,
    isEmpty: isSplitEmpty,
  } = useCurrentSplit()

  return (
    <div
      className='
        hidden md:flex md:justify-end md:items-center
        md:gap-10 md:mx-auto md:py-3 md:px-6
        text-sm
      '
    >
      <div>
        {isWeightLoading ? (
          <ClipLoader size={10} />
        ) : isWeightEmpty ? (
          <Link href='/weight'>
            <Button variant='text' sx={{ display: 'inline' }}>
              Start tracking your weight
            </Button>
          </Link>
        ) : (
          <span>{currentWeight.weight} lbs</span>
        )}
        <span className='ml-1 text-xs text-dark-gray'>| Weight</span>
      </div>

      <div>
        {isSplitLoading ? (
          <ClipLoader size={10} />
        ) : isSplitEmpty ? (
          <Link href='/splits'>
            <Button variant='text' sx={{ display: 'inline' }}>
              Create your first Split
            </Button>
          </Link>
        ) : (
          <span>{currentSplit.name}</span>
        )}
        <span className='ml-1 text-xs text-dark-gray'>| Current Split</span>
      </div>

      {currentSplit && (
        <div>
          Chest and Triceps
          <span className='ml-1 text-xs text-dark-gray'>| Next Workout</span>
        </div>
      )}
    </div>
  )
}
