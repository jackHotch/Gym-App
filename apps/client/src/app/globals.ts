import { Dispatch, SetStateAction } from 'react'
import { ISet } from './record/record'

export type FormEvent = React.FormEvent<HTMLFormElement>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>
export type DivEvent = React.MouseEvent<HTMLDivElement>
export type TextInputChangeEvent = React.ChangeEvent<HTMLInputElement>
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>

export interface IWeightData {
  id: number
  weight: number
  date: string
}

export interface ChartProps {
  weight: IWeightData[] | undefined
}

export interface SearchbarProps {
  placeholder: string
  data: IExercises[] | undefined
  newExercise: IWorkout[]
  setNewExercise: Dispatch<SetStateAction<IWorkout[]>>
}

export interface IWeightEntry {
  weight: string
  date: string
}

export interface IExercises {
  id: number
  name: string
  icon: null
  created_at: Date
}

export interface IWorkout {
  name: string
  notes: string
  sets: ISet[]
}
