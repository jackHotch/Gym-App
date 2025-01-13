import styles from './Exercise.module.css'
import { ExerciseProps, TextAreaChangeEvent, TextInputChangeEvent } from '@/types'
import { AnimatePresence, motion } from 'motion/react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Button } from '@gymapp/gymui/Button'
import { useToggle } from '@/hooks'
import { ExerciseModal } from '../ExerciseModal'
import { Set } from '../Set'

export const Exercise = ({ workout, setWorkout, index }: ExerciseProps) => {
  const [showExerciseModal, toggleExerciseModal, _, closeExerciseModal] = useToggle()
  const [showNotes, toggleNotes] = useToggle()

  const changeNotes = (
    e: TextAreaChangeEvent,
    defaultHeight: string,
    exerciseNumber: number
  ) => {
    if (e) {
      e.target.style.height = defaultHeight
      e.target.style.height = `${e.target.scrollHeight - 16}px`
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
    const newSetList = temp[exerciseId].sets.filter((value, id) => {
      if (id !== setId) return value
    })
    temp[exerciseId].sets = newSetList
    setWorkout(temp)
  }

  return (
    <motion.div
      className={styles.single_exercise}
      key={index}
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
          damping: 12,
        },
      }}
      exit={{
        x: '100%',
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      }}
    >
      <div className={styles.exercise_header}>
        <span className={styles.exercise_name}>{workout[index].name}</span>
        <MoreVertIcon
          onClick={() => toggleExerciseModal()}
          className={styles.three_dots}
        />
      </div>
      <div className={styles.hamburger_container}>
        <AnimatePresence>
          {showExerciseModal && (
            <ExerciseModal
              toggleExerciseModal={toggleExerciseModal}
              ind={index}
              showNote={showNotes}
              toggleNote={toggleNotes}
              workout={workout}
              setWorkout={setWorkout}
              closeExerciseModal={closeExerciseModal}
            />
          )}
        </AnimatePresence>
      </div>

      <hr />

      <div className={styles.set_section}>
        <div className={styles.set_labels}>
          <label id={styles.set_label}></label>
          <label>lbs</label>
          <label>Reps</label>
          <label>RPE</label>
        </div>

        <div className={styles.set_list}>
          <AnimatePresence>
            {workout[index].sets.map((value2, key2) => {
              return (
                <Set
                  key={key2}
                  value={value2}
                  exerciseNumber={index}
                  setNumber={key2}
                  handleChange={handleChange}
                  removeSet={removeSet}
                />
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showNotes && (
          <motion.div
            className={styles.notes}
            initial={{
              y: '-100%',
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 80,
              },
            }}
            exit={{
              y: '-100%',
              opacity: 0,
              transition: {
                duration: 0.15,
              },
            }}
          >
            <textarea
              placeholder='Notes...'
              onChange={(e: TextAreaChangeEvent) => changeNotes(e, '17px', index)}
            ></textarea>
          </motion.div>
        )}
      </AnimatePresence>

      <Button.Secondary
        type='button'
        sx={{
          display: 'block',
          margin: '10px auto',
          width: '100%',
          padding: '0',
          fontSize: '16px',
        }}
        onClick={() => addSet(index)}
      >
        Add Set
      </Button.Secondary>
    </motion.div>
  )
}
