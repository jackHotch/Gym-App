import { Dispatch, SetStateAction } from 'react'
import { ButtonEvent, IWorkout, TextInputChangeEvent } from '@/types'

export interface ICurrentSplit {
  name: string
}

export interface ISet {
  weight: string
  reps: string
  rpe: string
}

export interface AddExerciseModalProps {
  closeModal: () => void
  workout: IWorkout[]
  setWorkout: Dispatch<SetStateAction<IWorkout[]>>
}

export interface CreateNewExerciseModalProps {
  closeModal: () => void
}

type ThandleChange = (a: TextInputChangeEvent, b: number, c: number, d: string) => void

type TremoveSet = (a: number, b: number) => void

export interface SetProps {
  key: number
  value: ISet
  exerciseNumber: number
  setNumber: number
  handleChange: ThandleChange
  removeSet: TremoveSet
}

export interface ExerciseModalProps {
  toggleExerciseModal: () => void
  ind: number
  showNote: boolean
  toggleNote: () => void
  workout: IWorkout[]
  setWorkout: Dispatch<SetStateAction<IWorkout[]>>
  closeExerciseModal: () => void
}

export interface WorkoutConfirmationModalProps {
  closeModal: () => void
  handleSubmit: (e: ButtonEvent) => void
}
