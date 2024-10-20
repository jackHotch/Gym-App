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
  exercises,
  setExercises,
  closeExerciseModal,
}: ExerciseModalProps) => {
  const exerrciseModalRef = useRef<any>()

  const closeModal = () => {
    closeExerciseModal(ind)
  }

  useOutsideClick(exerrciseModalRef, closeModal)

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
    toggleNote(ind)
    toggleExerciseModal(ind)
  }

  function removeExercise() {
    const temp = [...exercises]
    const newList = temp.filter((value, id) => {
      if (id !== ind) return value
    })
    setExercises(newList)
    toggleExerciseModal(ind)
  }

  return (
    <motion.div
      ref={exerrciseModalRef}
      className={styles.container}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={styles.option} id={styles.add_note} onClick={changeNote}>
        <span>{showNote ? 'Remove Note' : 'Add Note'}</span>
      </div>
      <div className={styles.option} id={styles.remove_exercise} onClick={removeExercise}>
        <span>Remove Exercise</span>
      </div>
    </motion.div>
  )
}
