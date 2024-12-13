import { Dispatch, ReactNode, SetStateAction } from 'react'
import { ISet } from '../app/(user)/record/record'

export type FormEvent = React.FormEvent<HTMLFormElement>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>
export type DivEvent = React.MouseEvent<HTMLDivElement>
export type TextInputChangeEvent = React.ChangeEvent<HTMLInputElement>
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>

export interface PageWrapperProps {
  children: ReactNode | ReactNode[]
}

export interface BodyWrapperProps {
  children: ReactNode | ReactNode[]
}

export interface IWeightData {
  id: number
  weight: number
  date: string
}

export interface ChartProps {
  labels: string[]
  data: any[]
  isLoading: boolean
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

export interface HeaderMobileProps {}

export interface HeaderDesktopProps {}

export interface NavLinkProps {
  path: string
  children: ReactNode
}

export interface EntryModalProps {
  closeModal: () => void
  deleteEntry: () => void
}

export interface AddWeightModalProps {
  closeModal: () => void
}

