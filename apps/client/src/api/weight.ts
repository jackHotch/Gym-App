'use server'

import { IWeightData } from '@/app/globals'
import { IWeightEntry } from '@/app/globals'
import axios from 'axios'

const URL = process.env.URL

export const getWeight = async () => {
  const { data } = await axios.get(`${URL}/api/weight`)
  return data as IWeightData[]
}

export const addWeight = async (entry: IWeightEntry) => {
  const { data } = await axios.post(`${URL}/api/weight`, entry)
  return data as string
}

export const deleteWeight = async (id: number) => {
  const { data } = await axios.delete(`${URL}/api/weight/${id}`)
  return data as string
}
