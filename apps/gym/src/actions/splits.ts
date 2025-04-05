'use server'

import { ICurrentSplit } from '@/types'
import { getSupabaseUserId } from '@/utils/supabase/getSupabaseUserId'
import axios from 'axios'

const URL = process.env.URL + '/splits'

export const getCurrentSplit = async () => {
  const userId = await getSupabaseUserId()
  console.log('!!!!!Jack: ' + userId)
  const { data } = await axios.get(`${URL}/current`, {
    params: {
      userId: userId,
    },
  })
  console.log('!!!!!JACK ' + data)
  return data as ICurrentSplit
}
