import { Dispatch, SetStateAction } from 'react'
import { IWeightData } from '../globals'

export interface WeightListProps {
  weight: IWeightData[] | undefined
}

export interface EntryModalProps {
  id: number
  closeModal: (id: number) => void
}

export interface AddWeightModalProps {
  closeModal: () => void
}
