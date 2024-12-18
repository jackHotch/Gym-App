'use client'

import { SetProps } from '@/types'
import styles from './Set.module.css'
import { motion } from 'framer-motion'
import { Form } from '@gymapp/gymui/Form'

export const Set = ({
  value,
  exerciseNumber,
  setNumber,
  handleChange,
  removeSet,
}: SetProps) => {
  const deleteSet = () => {
    removeSet(exerciseNumber, setNumber)
  }

  return (
    <motion.div
      layout
      className={styles.set}
      key={exerciseNumber}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <label>Set {setNumber + 1}</label>

      <Form.Text.Filled
        autoComplete='off'
        placeholder='lbs'
        value={value.weight}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'weight')}
      />

      <Form.Text.Filled
        autoComplete='off'
        placeholder='Reps'
        value={value.reps}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'reps')}
      />

      <Form.Text.Filled
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
