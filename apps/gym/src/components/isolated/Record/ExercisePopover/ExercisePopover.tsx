'use client'

import styles from './ExercisePopover.module.css'
import { ExercisePopoverProps } from '@/types'
import { Popover } from '@gymapp/gymui/Popover'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export const ExercisePopover = ({
  open,
  setOpen,
  ind,
  showNote,
  toggleNote,
  workout,
  setWorkout,
}: ExercisePopoverProps) => {
  const changeNote = () => {
    toggleNote()
    setOpen(!open)
  }

  const removeExercise = () => {
    const temp = [...workout]
    const newList = temp.filter((value, id) => {
      if (id !== ind) return value
    })
    setWorkout(newList)
    setOpen(!open)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <MoreVertIcon />
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Item onClick={changeNote}>
          {showNote ? 'Remove Note' : 'Add Note'}
        </Popover.Item>
        <Popover.Item variant='danger' onClick={removeExercise}>
          Remove Exercise
        </Popover.Item>
      </Popover.Content>
    </Popover>
  )
}
