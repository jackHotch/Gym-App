'use server'

import { IWorkout } from '@/app/globals'
import axios from 'axios'

const URL = process.env.URL

export const getWorkoutNumber = async () => {
  const { data } = await axios.get(`${URL}/api/workout/number`)
  return data as number
}

export const createWorkout = async (workout: IWorkout[]) => {
  const { data } = await axios.post(`${URL}/api/workout/create`, workout)
  return data as string
}
