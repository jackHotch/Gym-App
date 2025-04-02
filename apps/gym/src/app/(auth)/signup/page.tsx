'use client'

import styles from './SignUp.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { useState } from 'react'
import Image from 'next/image'
import { Error } from '@gymapp/gymui/Error'
import { motion } from 'motion/react'
import { TextInputChangeEvent } from '@/types'
import { useFeatureFlag } from '@/hooks/api'
import { signup, signInWithGoogle } from '@/actions/auth'
import { z } from 'zod'

const SignUp = () => {
  const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const [signUpError, setSignUpError] = useState('')
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const signUpSchema = z.object({
    firstName: z
      .string({ required_error: 'First Name is required' })
      .trim()
      .min(1, { message: 'First Name cannot be empty' }),
    lastName: z
      .string({ required_error: 'Last Name is required' })
      .trim()
      .min(1, { message: 'Last Name cannot be empty' }),
    email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .email({ message: 'Invalid email address' }),
    password: z
      .string({ required_error: 'Password is required' })
      .trim()
      .min(6, { message: 'Password must be at least 6 charaters long' }),
  })

  const handleChange = (e: TextInputChangeEvent) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault()
    const { success, error } = signUpSchema.safeParse(signUpData)

    if (success) {
      const formData = new FormData()
      formData.append('firstName', signUpData.firstName)
      formData.append('lastName', signUpData.lastName)
      formData.append('email', signUpData.email)
      formData.append('password', signUpData.password)

      if (authEnabled) await signup(formData)
      else alert('Not Implemented Yet!')
    } else {
      setSignUpError(error.issues[0].message)
    }
  }

  const handleGoogleSignUp = async (e) => {
    e.preventDefault()
    // if (authEnabled) await signInWithGoogle()
    // else alert('Not Implemented Yet!')
    alert('Not Implemented Yet!')
  }

  return (
    <form className={styles.container}>
      <motion.div layout className={styles.card}>
        <h1>Create Account</h1>

        <div className={styles.input_container}>
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
          <Error isVisible={signUpError ? true : false}>{signUpError}</Error>
        </div>

        <div className={styles.button_container}>
          <Button.Primary
            type='submit'
            size='medium'
            sx={{ padding: '12px' }}
            onClick={handleSignUp}
          >
            Create Account
          </Button.Primary>
          <button
            className={styles.google_button}
            type='submit'
            onClick={handleGoogleSignUp}
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
