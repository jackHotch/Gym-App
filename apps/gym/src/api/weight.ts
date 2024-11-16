'use server'

import { IWeightData } from '@/types'
import { IWeightEntry } from '@/types'
import axios from 'axios'

const URL = process.env.URL + '/api/weight'

export const getWeight = async () => {
  const { data } = await axios.get(URL)
  return data as IWeightData[]
}

export const addWeight = async (entry: IWeightEntry) => {
  const { data } = await axios.post(URL, entry)
  return data as string
}

export const deleteWeight = async (id: number) => {
  const { data } = await axios.delete(`${URL}/${id}`)
  return data as string
}

export const getCurrentWeight = async () => {
  const { data } = await axios.get(`${URL}/current`)
  return data as string
}
