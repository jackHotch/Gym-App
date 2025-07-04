'use client'

import { SetProps } from '@/types'
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
      key={exerciseNumber}
      className='flex gap-2 items-center'
      initial={{ y: '-100%', opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 60, damping: 11 },
      }}
      exit={{
        x: '100%',
        opacity: 0,
        transition: { duration: 0.35 },
      }}
    >
      <label className='w-[50px]'>Set {setNumber + 1}</label>

      <Form.Text.Filled
        inputMode='numeric'
        autoComplete='off'
        placeholder='lbs'
        value={value.weight}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'weight')}
        sx={{ width: '60px', textAlign: 'center' }}
      />

      <Form.Text.Filled
        inputMode='numeric'
        autoComplete='off'
        placeholder='Reps'
        value={value.reps}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'reps')}
        sx={{ width: '60px', textAlign: 'center' }}
      />

      <Form.Text.Filled
        inputMode='numeric'
        autoComplete='off'
        placeholder='RPE'
        value={value.rpe}
        onChange={(e) => handleChange(e, exerciseNumber, setNumber, 'rpe')}
        sx={{ width: '60px', textAlign: 'center' }}
      />

      <span
        onClick={deleteSet}
        className='ml-2 w-[15px] cursor-pointer font-bold text-[rgb(221,62,50)]'
      >
        X
      </span>
    </motion.div>
  )
}
