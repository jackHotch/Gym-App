'use server'

import { ICurrentSplit } from '@/app/record/record'
import axios from 'axios'

const URL = process.env.URL

export const getCurrentSplit = async () => {
  const { data } = await axios.get(`${URL}/api/splits/current`)
  return data as ICurrentSplit
}
