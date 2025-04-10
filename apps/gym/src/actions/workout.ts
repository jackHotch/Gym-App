'use server'

import { IWorkout, IWorkoutCount } from '@/types'
import { getSupabaseUserId } from '@/utils/supabase/utils'
import axios from 'axios'

const URL = process.env.URL + '/workouts'

export const getWorkoutNumber = async () => {
  const userId = await getSupabaseUserId()
  const { data } = await axios.get(`${URL}/count`, {
    params: {
      userId: userId,
    },
  })
  return data as IWorkoutCount
}

export const createWorkout = async (workout: IWorkout[]) => {
  const userId = await getSupabaseUserId()
  await axios.post(
    URL,
    { workout },
    {
      params: {
        userId: userId,
      },
    }
  )
}
