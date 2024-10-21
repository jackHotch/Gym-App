import { Dispatch, SetStateAction } from 'react'
import { IWeightData } from '../globals'

export interface WeightListProps {
  weight: IWeightData[] | undefined
  isLoading: boolean
}

export interface EntryModalProps {
  closeModal: () => void
  deleteEntry: () => void
}

export interface AddWeightModalProps {
  closeModal: () => void
}
