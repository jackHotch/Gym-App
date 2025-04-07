'use client'

import styles from './Login.module.css'
import { useState } from 'react'
import { TextInputChangeEvent } from '@/types'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { Error } from '@gymapp/gymui/Error'
import Image from 'next/image'
import { useFeatureFlag } from '@/hooks/api'
import { motion } from 'motion/react'
import { login, signInWithGoogle } from '@/actions/auth'
import { z } from 'zod'

const Login = () => {
  const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const loginSchema = z.object({
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
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const { success, error } = loginSchema.safeParse(loginData)

    if (success) {
      const formData = new FormData()
      formData.append('email', loginData.email)
      formData.append('password', loginData.password)

      if (authEnabled) {
        const errorMessage = await login(formData)
        if (errorMessage) setLoginError(errorMessage)
      } else alert('Not Implemented Yet!')
    } else {
      setLoginError(error.issues[0].message)
      setIsLoading(false)
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
        <h1>Log In</h1>

        <div className={styles.input_container}>
          <Form.Text.Outline
            placeholder='Email Address'
            name='email'
            value={loginData.email}
            onChange={handleChange}
          />
          <Form.Text.Password
            placeholder='Password'
            name='password'
            value={loginData.password}
            onChange={handleChange}
          />
          <Error isVisible={loginError ? true : false}>{loginError}</Error>
        </div>

        <div className={styles.button_container}>
          {isLoading ? (
            <Button.Loading sx={{ padding: '12px' }} />
          ) : (
            <Button.Primary
              type='submit'
              size='medium'
              sx={{ padding: '12px' }}
              onClick={handleLogin}
            >
              Log In
            </Button.Primary>
          )}
          <button
            className={styles.google_button}
            type='submit'
            onClick={handleGoogleSignUp}
          >
            <Image src='/images/google.png' alt='Google Icon' width={20} height={20} />
            Sign In With Google
          </button>
        </div>
      </motion.div>
    </form>
  )
}

export default Login
