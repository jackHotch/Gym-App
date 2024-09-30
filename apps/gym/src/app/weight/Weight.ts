import { Dispatch, SetStateAction } from 'react'
import { IWeightData } from '../globals'

export interface WeightListProps {
  weight: IWeightData[] | undefined
  isLoading: boolean
}

export interface EntryModalProps {
  id: number
  closeModal: (id: number) => void
}

export interface AddWeightModalProps {
  closeModal: () => void
}
