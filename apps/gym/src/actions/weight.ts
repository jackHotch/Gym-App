'use server'

import { IWeightData, IWeightEntry } from '@/types'
import axios from 'axios'
import { getSupabaseUserId } from '@/utils/supabase/getSupabaseUserId'

const URL = process.env.URL + '/weights'

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
  const userId = await getSupabaseUserId()
  const { data } = await axios.get(`${URL}/current`, {
    params: {
      userId: userId,
    },
  })
  return data as IWeightEntry
}
