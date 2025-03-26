'use server'

import axios from 'axios'
import { IExercises } from '@/types'

const URL = process.env.URL + '/api/exercises'

export const getExercises = async () => {
  const { data } = await axios.get(URL)
  return data as IExercises[]
}

export const createExercise = async (name: string) => {
  const { data } = await axios.post(`${URL}/create`, { name })
  return data as string
}
