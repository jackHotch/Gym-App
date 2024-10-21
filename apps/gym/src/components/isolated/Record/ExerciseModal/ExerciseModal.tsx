'use client'

import { useRef } from 'react'
import { ExerciseModalProps } from '@/app/record/record'
import styles from './ExerciseModal.module.css'
import { motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks'

export const ExerciseModal = ({
  toggleExerciseModal,
  ind,
  showNote,
  toggleNote,
  workout,
  setWorkout,
  closeExerciseModal,
}: ExerciseModalProps) => {
  const exerciseModalRef = useRef<any>()

  useOutsideClick(exerciseModalRef, closeExerciseModal)

  const modalVariants = {
    hidden: {
      scale: 0,
      x: '40%',
      y: '-50%',
    },
    visible: {
      scale: 1,
      x: 0,
      y: 0,
    },
    exit: {
      scale: 0,
      x: '40%',
      y: '-50%',
    },
  }

  const changeNote = () => {
    toggleNote()
    toggleExerciseModal()
  }

  function removeExercise() {
    const temp = [...workout]
    const newList = temp.filter((value, id) => {
      if (id !== ind) return value
    })
    setWorkout(newList)
    toggleExerciseModal()
  }

  return (
    <motion.div
      ref={exerciseModalRef}
      className={styles.container}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={styles.option} id={styles.add_note} onClick={changeNote}>
        {showNote ? 'Remove Note' : 'Add Note'}
      </div>
      <div className={styles.option} id={styles.remove_exercise} onClick={removeExercise}>
        Remove Exercise
      </div>
    </motion.div>
  )
}
