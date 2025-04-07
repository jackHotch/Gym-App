'use server'

import { ICurrentSplit } from '@/types'
import { getSupabaseUserId } from '@/utils/supabase/utils'
import axios from 'axios'

const URL = process.env.URL + '/splits'

export const getCurrentSplit = async () => {
  const userId = await getSupabaseUserId()
  const { data } = await axios.get(`${URL}/current`, {
    params: {
      userId: userId,
    },
  })
  return data as ICurrentSplit
}
