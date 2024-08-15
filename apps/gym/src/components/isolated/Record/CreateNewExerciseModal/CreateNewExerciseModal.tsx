'use client'

import { useState } from 'react'
import { CreateNewExerciseModalProps } from '@/app/record/record'
import styles from './CreateNewExerciseModal.module.css'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import { DivEvent, FormEvent, TextInputChangeEvent } from '@/app/globals'
import { useCreateExercise } from '@/hooks'

export const CreateNewExerciseModal = ({ closeModal }: CreateNewExerciseModalProps) => {
  const [name, setName] = useState('')
  const { mutate: createExercise } = useCreateExercise()

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

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    createExercise(name)
    closeModal()
  }

  function handleChange(e: TextInputChangeEvent) {
    setName(e.target.value)
  }

  function backgroundClick(e: DivEvent) {
    e.stopPropagation()
    closeModal()
  }

  return (
    <div className={styles.modal_background} onClick={backgroundClick}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <motion.div
          className={styles.new_exercise_modal}
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <div className={styles.xbtn}>
            <button onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.new_exercise_form}>
            <h3 className={styles.title}>Create New Exercise</h3>

            <input
              type='text'
              placeholder='Exercise Name'
              value={name}
              onChange={(e) => handleChange(e)}
            />
            <button type='submit' className={styles.create_exercise_btn}>
              Create
            </button>
          </div>
        </motion.div>
      </form>
    </div>
  )
}
