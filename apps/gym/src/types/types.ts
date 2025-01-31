import { Dayjs } from 'dayjs'
import { HTMLMotionProps } from 'motion/react'
import { CSSProperties, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react'

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
  height?: string
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
  closeMenu?: () => void
  containerSx?: CSSProperties
  textSx?: CSSProperties
  children: ReactNode
}

export interface EntryModalProps {
  closeModal: () => void
  deleteEntry: () => void
}

export interface AddWeightModalProps {
  closeModal: () => void
}

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

export interface ChartHeaderProps {
  startingWeight: number
  endingWeight?: number
}

export interface RangeSelectorProps {
  filter: (startDate?: Dayjs, endDate?: Dayjs) => void
  openDatePickers: () => void
  closeDatePickers: () => void
  data: IWeightData[]
}

export interface WeightListEntryProps {
  value: IWeightData
  id: number
}

export interface ExerciseProps {
  index: number
  workout: IWorkout[]
  setWorkout: Dispatch<SetStateAction<IWorkout[]>>
}

export interface DatePickerProps {
  sx?: CSSProperties
  sxCalendar?: CSSProperties
  value: any
  onChange?: (a: Dayjs, b?: boolean) => void
  openCalendar?: boolean
  start?: boolean
}

export interface DateRangePickerProps {
  filter: (startDate?: Dayjs, endDate?: Dayjs) => void
  data: IWeightData[]
}

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  sx?: CSSProperties
  children: ReactNode | ReactNode[]
}

export interface DropdownContentProps extends HTMLMotionProps<'div'> {
  sx?: CSSProperties
  children: ReactNode | ReactNode[]
}

export interface DropdownItemProps {
  sx?: CSSProperties
  children: string
  handleClick: (a: number) => void
  id: number
}

export interface DropdownMobileProps {
  closeMenu: () => void
}

export interface WeightChartMobileProps {}

export interface WeightChartDesktopProps {
  filter: () => void
  weightData: number[]
  labels: string[]
  isLoading: boolean
  data: IWeightData[]
}
