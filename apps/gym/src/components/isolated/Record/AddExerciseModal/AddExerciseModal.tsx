'use client'

import { useState } from 'react'
import { AddExerciseModalProps } from '@/app/record/record'
import { IWorkout } from '@/app/globals'
import styles from './AddExerciseModal.module.css'
import { Searchbar } from '@/components/reusable/Searchbar/Searchbar'
import CloseIcon from '@mui/icons-material/Close'
import { CreateNewExerciseModal } from '../CreateNewExerciseModal'
import { motion, AnimatePresence } from 'framer-motion'
import { useToggle, useExercises } from '@/hooks'

export const AddExerciseModal = ({ closeModal, workout, setWorkout }: AddExerciseModalProps) => {
  const [newExercises, setNewExercises] = useState<IWorkout[]>([])
  const [showCreateExerciseModal, _, openCreateExerciseModal, closeCreateExerciseModal] =
    useToggle()
  const { data: exercises } = useExercises()

  const modalVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 16,
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

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
    <div className={styles.modal_background} onClick={closeModal}>
      <motion.div
        className={styles.modal_container}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className={styles.header}>
          <button className={styles.create_exercise} onClick={openCreateExerciseModal}>
            Create New Exercise
          </button>
          <button onClick={closeModal}>
            {' '}
            <CloseIcon id={styles.top_clear_btn} />{' '}
          </button>
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
                <span className={styles.exercises_clear_btn} onClick={() => removeExercise(key)}>
                  X
                </span>
              </div>
            )
          })}
        </div>
        <div className={styles.footer_btns}>
          <button onClick={closeModal}>Cancel</button>
          <button id={styles.add_btn} onClick={addExercises}>
            Add
          </button>
        </div>
      </motion.div>

      {showCreateExerciseModal && (
        <AnimatePresence>
          <CreateNewExerciseModal closeModal={closeCreateExerciseModal} />
        </AnimatePresence>
      )}
    </div>
  )
}
