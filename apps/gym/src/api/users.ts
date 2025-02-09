'use server'

import axios from 'axios'
import { loginFormData, signUpFormData } from '@/types'

const URL = process.env.URL + '/auth'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,24}$/

export const validateSignUpForm = (formData: signUpFormData) => {
  if (!formData.firstName) return 'First Name is Required'
  if (!formData.lastName) return 'Last Name is Required'
  if (!emailRegex.test(formData.email)) return 'Invalid Email Format'
  if (!passwordRegex.test(formData.password)) return 'Invalid Password'
  return null
}

export const validateLoginForm = (formData: loginFormData) => {}

export const signUpAction = (formData: signUpFormData) => {
  validateSignUpForm(formData)
  return null
}

export const loginAction = (formData: loginFormData) => {
  return null
}
