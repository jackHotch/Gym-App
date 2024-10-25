'use client'

import { useRef } from 'react'
import { ExerciseModalProps } from '@/app/record/record'
import styles from './ExerciseModal.module.css'
import { useOutsideClick } from '@/hooks'
import { Modal } from '@gymapp/gymui/Modal'

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

  const changeNote = () => {
    toggleNote()
    toggleExerciseModal()
  }

  const removeExercise = () => {
    const temp = [...workout]
    const newList = temp.filter((value, id) => {
      if (id !== ind) return value
    })
    setWorkout(newList)
    toggleExerciseModal()
  }

  return (
    <Modal.Popover
      ref={exerciseModalRef}
      sx={{ position: 'absolute', top: '-25px', right: '0', zIndex: '10' }}
    >
      <Modal.Item onClick={changeNote}>
        {showNote ? 'Remove Note' : 'Add Note'}
      </Modal.Item>
      <Modal.Item onClick={removeExercise} sx={{ color: 'var(--red)' }}>
        Remove Exercise
      </Modal.Item>
    </Modal.Popover>
  )
}
