'use client'

import { useState } from 'react'
import styles from './Workout.module.css'
import {
  AddExerciseModal,
  WorkoutConfirmationModal,
  Exercise,
} from '@/components/isolated/Record'
import { IWorkout } from '@/app/globals'
import { ButtonEvent } from '@/app/globals'
import { AnimatePresence } from 'framer-motion'
import { useToggle, useWorkoutNumber, useCreateWorkout } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import ClipLoader from 'react-spinners/ClipLoader'

const Workout = () => {
  const [workout, setWorkout] = useState<IWorkout[]>([])
  const [showAddExerciseModal, __, openAddExerciseModal, closeAddExerciseModal] =
    useToggle()
  const [showConfirmationModal, _, openConfirmationModal, closeConfirmationModal] =
    useToggle()
  const { data, isLoading } = useWorkoutNumber()
  const workoutNumber = isLoading ? null : data ? data + 1 : 0
  const { mutate: createWorkout } = useCreateWorkout()

  const handleSubmit = (e: ButtonEvent) => {
    e.preventDefault()
    createWorkout(workout)
  }

  return (
    <div className={styles.background}>
      <form>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Workout #{workoutNumber ? workoutNumber : <ClipLoader size={20} />}
          </h1>
          <div className={styles.exercises}>
            <AnimatePresence>
              {workout.map((_, key) => {
                return (
                  <Exercise
                    workout={workout}
                    setWorkout={setWorkout}
                    index={key}
                    key={key}
                  />
                )
              })}
            </AnimatePresence>
          </div>

          <Button.Secondary
            type='button'
            onClick={openAddExerciseModal}
            size='medium'
            sx={{ margin: '16px auto 8px auto', width: '175px' }}
          >
            Add Exercise
          </Button.Secondary>

          <Button.Primary
            type='button'
            onClick={openConfirmationModal}
            size='medium'
            sx={{ margin: '8px auto 16px auto', width: '175px' }}
          >
            Finish Workout
          </Button.Primary>
        </div>
      </form>

      <AnimatePresence>
        {showAddExerciseModal && (
          <AddExerciseModal
            closeModal={closeAddExerciseModal}
            workout={workout}
            setWorkout={setWorkout}
          />
        )}
        {showConfirmationModal && (
          <WorkoutConfirmationModal
            closeModal={closeConfirmationModal}
            handleSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Workout
