'use client'

import { useState } from 'react'
import { AddExerciseModalProps } from '@/app/record/record'
import { IWorkout } from '@/types'
import styles from './AddExerciseModal.module.css'
import { Searchbar } from '@/components/reusable/Searchbar/Searchbar'
import { CreateNewExerciseModal } from '../CreateNewExerciseModal'
import { AnimatePresence } from 'framer-motion'
import { useToggle, useExercises } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { Modal } from '@gymapp/gymui/Modal'
import { CloseIcon } from '@gymapp/gymui/CloseIcon'

export const AddExerciseModal = ({
  closeModal,
  workout,
  setWorkout,
}: AddExerciseModalProps) => {
  const [newExercises, setNewExercises] = useState<IWorkout[]>([])
  const [showCreateExerciseModal, _, openCreateExerciseModal, closeCreateExerciseModal] =
    useToggle()
  const { data: exercises } = useExercises()

  const removeExercise = (i: number) => {
    const temp = [...newExercises]
    temp.splice(i, 1)
    setNewExercises(temp)
  }

  const addExercises = () => {
    let temp = [...workout]
    temp = temp.concat(newExercises)
    setWorkout(temp)
    closeModal()
  }

  return (
    <Modal.FullPage width='500px' height='600px' onOutsideClick={closeModal}>
      <div className={styles.header}>
        <Button.Text onClick={openCreateExerciseModal} sx={{ fontSize: '18px' }}>
          Create New Exercise
        </Button.Text>

        <CloseIcon onClick={closeModal} />
      </div>
      <div className={styles.textbox}>
        <Searchbar
          placeholder='Add Exercise'
          data={exercises}
          newExercise={newExercises}
          setNewExercise={setNewExercises}
        />
      </div>
      <div className={styles.future_exercise_list}>
        {newExercises.map((value, key) => {
          return (
            <div key={key} className={styles.future_exercise}>
              {value.name}
              <span
                className={styles.exercises_clear_btn}
                onClick={() => removeExercise(key)}
              >
                X
              </span>
            </div>
          )
        })}
      </div>

      <div className={styles.footer_btns}>
        <Button.Danger onClick={closeModal} sx={{ margin: '10px 25px', width: '100px' }}>
          Cancel
        </Button.Danger>

        <Button.Primary
          onClick={addExercises}
          sx={{ margin: '10px 25px', width: '100px' }}
        >
          Add
        </Button.Primary>
      </div>

      <AnimatePresence>
        {showCreateExerciseModal && (
          <CreateNewExerciseModal closeModal={closeCreateExerciseModal} />
        )}
      </AnimatePresence>
    </Modal.FullPage>
  )
}
