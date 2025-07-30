import { ExerciseProps, TextAreaChangeEvent, TextInputChangeEvent } from '@/types'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@gymapp/gymui/Button'
import { useToggle } from '@/hooks'
import { ExercisePopover } from '../ExercisePopover'
import { Set } from '../Set'
import { useState } from 'react'

export const Exercise = ({ workout, setWorkout, index }: ExerciseProps) => {
  const [showExercisePopover, setShowExercisePopover] = useState(false)
  const [showNotes, toggleNotes] = useToggle()

  const changeNotes = (
    e: TextAreaChangeEvent,
    defaultHeight: string,
    exerciseNumber: number
  ) => {
    if (e) {
      e.target.style.height = defaultHeight
      e.target.style.height = `${e.target.scrollHeight - 0}px`
    }

    const temp = [...workout]
    temp[exerciseNumber].notes = e.target.value
  }

  const addSet = (index: number) => {
    const temp1 = [...workout]
    temp1[index].sets.push({ weight: '', reps: '', rpe: '' })
    setWorkout(temp1)
  }

  const handleChange = (
    e: TextInputChangeEvent,
    exerciseIndex: number,
    setIndex: number,
    name: string
  ) => {
    const temp = [...workout]
    temp[exerciseIndex].sets[setIndex][name] = e.target.value
    setWorkout(temp)
  }

  const removeSet = (exerciseId: number, setId: number) => {
    let temp = [...workout]
    const newSetList = temp[exerciseId].sets.filter((_, id) => id !== setId)
    temp[exerciseId].sets = newSetList
    setWorkout(temp)
  }

  return (
    <motion.div
      key={index}
      className='my-4'
      initial={{ y: '-100%', opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 60, damping: 12 },
      }}
      exit={{
        x: '100%',
        opacity: 0,
        transition: { duration: 0.6 },
      }}
    >
      <div className='flex items-center justify-between p-0'>
        <span className='inline-block text-lg font-semibold text-primary'>
          {workout[index].name}
        </span>
        <ExercisePopover
          open={showExercisePopover}
          setOpen={setShowExercisePopover}
          ind={index}
          showNote={showNotes}
          toggleNote={toggleNotes}
          workout={workout}
          setWorkout={setWorkout}
        />
      </div>

      <hr className='mb-2 border-t-2 border-primary opacity-35' />

      {/* Set Section */}
      <div className='flex flex-col gap-2 items-center'>
        <div className='flex gap-3'>
          <label className='w-[50px]'></label>
          <label className='w-[60px]'>lbs</label>
          <label className='w-[60px]'>Reps</label>
          <label className='w-[60px]'>RPE</label>
          <label className='w-[15px]'></label>
        </div>

        <div className='flex flex-col gap-1'>
          <AnimatePresence>
            {workout[index].sets.map((value2, key2) => (
              <Set
                key={key2}
                value={value2}
                exerciseNumber={index}
                setNumber={key2}
                handleChange={handleChange}
                removeSet={removeSet}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Notes Section */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            className='flex flex-col my-2.5'
            initial={{ y: '-100%', opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 80 },
            }}
            exit={{
              y: '-100%',
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          >
            <textarea
              placeholder='Notes...'
              onChange={(e: TextAreaChangeEvent) => changeNotes(e, '20px', index)}
              className='border-2 border-light-gray rounded-lg outline-none focus:border-primary resize-none p-1 overflow-y-hidden'
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Set Button */}
      <Button
        variant='secondary'
        type='button'
        sx={{
          display: 'block',
          marginTop: '10px',
          width: '100%',
          padding: '0',
        }}
        onClick={() => addSet(index)}
      >
        Add Set
      </Button>
    </motion.div>
  )
}
