'use server'

import axios from 'axios'
import { IExercises } from '@/app/globals'

const URL = process.env.URL

export const getExercises = async () => {
  const { data } = await axios.get(`${URL}/api/exercises`)
  return data as IExercises[]
}

export const createExercise = async (name: string) => {
  const { data } = await axios.post(`${URL}/api/exercises/create`, { name })
  return data as string
}
