'use server'

import { IWorkout } from '@/types'
import axios from 'axios'

const URL = process.env.URL + '/api/workout'

export const getWorkoutNumber = async () => {
  const { data } = await axios.get(`${URL}/number`)
  return data as number
}

export const createWorkout = async (workout: IWorkout[]) => {
  const { data } = await axios.post(`${URL}/create`, workout)
  return data as string
}
