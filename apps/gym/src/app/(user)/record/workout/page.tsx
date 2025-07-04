'use client'

import { useState } from 'react'
import {
  AddExerciseModal,
  WorkoutConfirmationModal,
  Exercise,
} from '@/components/isolated/Record'
import { IWorkout, ButtonEvent } from '@/types'
import { AnimatePresence } from 'motion/react'
import { useToggle, useWorkoutNumber, useCreateWorkout } from '@/hooks'
import ClipLoader from 'react-spinners/ClipLoader'
import { Card } from '@gymapp/gymui/Card'

const Workout = () => {
  const [workout, setWorkout] = useState<IWorkout[]>([])
  const [showAddExerciseModal, setShowAddExerciseModal] = useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = useToggle()
  const { data, isLoading } = useWorkoutNumber()
  const workoutNumber = !isLoading && data?.count != null ? data.count + 1 : null
  const { mutate: createWorkout } = useCreateWorkout()

  const handleSubmit = (e: ButtonEvent) => {
    e.preventDefault()
    createWorkout(workout)
  }

  return (
    <form className='flex justify-center'>
      <Card sx={{ width: '450px' }}>
        <Card.Content>
          <h1 className='border-b border-black text-center text-3xl'>
            {isLoading ? (
              <ClipLoader size={20} />
            ) : data?.count === 0 ? (
              'First Workout!'
            ) : (
              `Workout #${workoutNumber}`
            )}
          </h1>

          <div className='flex flex-col gap-8'>
            <AnimatePresence>
              {workout.map((_, key) => (
                <Exercise
                  workout={workout}
                  setWorkout={setWorkout}
                  index={key}
                  key={key}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className='flex items-center justify-around'>
            <AddExerciseModal
              open={showAddExerciseModal}
              setOpen={setShowAddExerciseModal}
              workout={workout}
              setWorkout={setWorkout}
            />

            <WorkoutConfirmationModal
              open={showConfirmationModal}
              setOpen={setShowConfirmationModal}
              handleSubmit={handleSubmit}
            />
          </div>
        </Card.Content>
      </Card>
    </form>
  )
}

export default Workout
