'use server'

import axios from 'axios'
import { IExercises } from '@/types'
import { getSupabaseUserId } from '@/utils/supabase/utils'

const URL = process.env.URL + '/' + process.env.API_VERSION + '/exercises'

export const getExercises = async () => {
  const userId = await getSupabaseUserId()
  const { data } = await axios.get(URL, {
    params: {
      userId: userId,
    },
  })
  return data as IExercises[]
}

export const createExercise = async (name: string) => {
  const userId = await getSupabaseUserId()
  await axios.post(
    URL,
    { name },
    {
      params: {
        userId: userId,
      },
    }
  )
}
