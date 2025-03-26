'use server'

import { ICurrentSplit } from '@/types'
import axios from 'axios'

const URL = process.env.URL + '/api/splits'

export const getCurrentSplit = async () => {
  const { data } = await axios.get(`${URL}/current`)
  return data as ICurrentSplit
}
