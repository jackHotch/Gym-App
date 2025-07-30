'use client'

import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { useState } from 'react'
import Image from 'next/image'
import { Error } from '@gymapp/gymui/Error'
import { motion } from 'motion/react'
import { TextInputChangeEvent } from '@/types'
import { useFeatureFlag } from '@/hooks/api'
import { signup, signInWithGoogle } from '@/actions/auth'
import { signUpSchema } from '@/constants'

const SignUp = () => {
  const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const [isLoading, setIsLoading] = useState(false)
  const [signUpError, setSignUpError] = useState('')
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (e: TextInputChangeEvent) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const { success, error } = signUpSchema.safeParse(signUpData)

    if (success) {
      const formData = new FormData()
      formData.append('firstName', signUpData.firstName)
      formData.append('lastName', signUpData.lastName)
      formData.append('email', signUpData.email)
      formData.append('password', signUpData.password)

      if (authEnabled) {
        const errorMessage = await signup(formData)
        if (errorMessage) {
          setSignUpError(errorMessage)
          setIsLoading(false)
        }
      } else alert('Not Implemented Yet!')
    } else {
      setSignUpError(error.issues[0].message)
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Not Implemented Yet!')
  }

  return (
    <form className='absolute inset-0 flex flex-col p-6 items-center justify-center gap-8'>
      <motion.div
        layout
        className='flex w-full max-w-xl flex-col gap-8 rounded-xl md:p-8 bg-white md:shadow-[var(--shadow-primary)]'
      >
        <h1 className='text-4xl'>Create Account</h1>

        <div className='flex flex-col gap-2'>
          <Form.Text.Outline
            placeholder='First Name'
            name='firstName'
            value={signUpData.firstName}
            onChange={handleChange}
          />
          <Form.Text.Outline
            placeholder='Last Name'
            name='lastName'
            value={signUpData.lastName}
            onChange={handleChange}
          />
          <Form.Text.Outline
            placeholder='Email Address'
            name='email'
            type='email'
            value={signUpData.email}
            onChange={handleChange}
          />
          <Form.Text.Password
            placeholder='Password'
            name='password'
            type='password'
            value={signUpData.password}
            onChange={handleChange}
          />
          <Error isVisible={!!signUpError} className='text-red-600'>
            {signUpError}
          </Error>
        </div>

        <div className='flex flex-col gap-2'>
          {isLoading ? (
            <Button variant='loading' className='p-3' />
          ) : (
            <Button type='submit' className='p-3' onClick={handleSignUp}>
              Create Account
            </Button>
          )}
          <button
            type='submit'
            onClick={handleGoogleSignUp}
            className='flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-black bg-white px-4 py-3 text-center text-base'
          >
            <Image src='/images/google.png' alt='Google Icon' width={20} height={20} />
            Sign Up With Google
          </button>
        </div>
      </motion.div>
    </form>
  )
}

export default SignUp
