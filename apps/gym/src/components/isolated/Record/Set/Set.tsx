'use client'

import { SetProps } from '@/types'
import styles from './Set.module.css'
import { motion } from 'motion/react'
import { Form } from '@gymapp/gymui/Form'

export const Set = ({
  value,
  exerciseNumber,
  setNumber,
  handleChange,
  removeSet,
}: SetProps) => {
  function deleteSet() {
    removeSet(exerciseNumber, setNumber)
  }

  return (
    <motion.div
      className={styles.set}
      key={exerciseNumber}
      initial={{
        y: '-100%',
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 60,
          damping: 11,
        },
      }}
      exit={{
        x: '100%',
        opacity: 0,
        transition: {
          duration: 0.35,
        },
      }}
    >
      <label>Set {setNumber + 1}</label>

      <Form.Text.Filled
        inputMode='numeric'
        autoComplete='off'
        placeholder='lbs'
        value={value.weight}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'weight')}
      />

      <Form.Text.Filled
        inputMode='numeric'
        autoComplete='off'
        placeholder='Reps'
        value={value.reps}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'reps')}
      />

      <Form.Text.Filled
        inputMode='numeric'
        autoComplete='off'
        placeholder='RPE'
        value={value.rpe}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'rpe')}
      />

      <span className={styles.delete_set_btn} onClick={deleteSet}>
        X
      </span>
    </motion.div>
  )
}
