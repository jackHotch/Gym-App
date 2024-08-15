'use client'

import { useEffect, useRef } from 'react'
import { ExerciseModalProps } from '@/app/record/record'
import styles from './ExerciseModal.module.css'
import { motion } from 'framer-motion'

export const ExerciseModal = ({
  showExerciseModal,
  toggleExerciseModal,
  ind,
  showNote,
  toggleNote,
  exercises,
  setExercises,
}: ExerciseModalProps) => {
  const hamRef = useRef<any>()

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

  useEffect(() => {
    let handler = (e: any) => {
      // if (!hamRef.current.contains(e.target)) {
      if (e.target.className === 'three_dots') {
        toggleExerciseModal(ind)
        return
      }
      // }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

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
      ref={hamRef}
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
