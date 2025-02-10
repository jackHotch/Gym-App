'use server'

import axios from 'axios'

const URL = process.env.URL + '/auth'

import { signUpFormData, loginFormData } from '@/types'

export const signUpAction = async (formData: signUpFormData) => {
  try {
    await axios.post(`${URL}/signup`, formData)
  } catch (error) {
    return error.response.data.message
  }
  return null
}

export const loginAction = async (formData: loginFormData) => {
  try {
    await axios.post(`${URL}/login`, formData)
  } catch (error) {
    return error.response.data.message
  }
  return null
}
