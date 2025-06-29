'use client'

import { useState } from 'react'
import { TextInputChangeEvent } from '@/types'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { Error } from '@gymapp/gymui/Error'
import Image from 'next/image'
import { useFeatureFlag } from '@/hooks/api'
import { motion } from 'motion/react'
import { login, signInWithGoogle } from '@/actions/auth'
import { loginSchema } from '@/constants'

const Login = () => {
  const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
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
        if (errorMessage) {
          setLoginError(errorMessage)
          setIsLoading(false)
        }
      } else alert('Not Implemented Yet!')
    } else {
      setLoginError(error.issues[0].message)
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Not Implemented Yet!')
  }

  return (
    <>
      <form className='absolute inset-0 flex flex-col p-6 items-center justify-center gap-8'>
        <motion.div
          layout
          className='flex w-full max-w-xl flex-col gap-8 rounded-xl md:p-8 bg-white md:shadow-[var(--shadow-primary)]'
        >
          <h1 className='text-4xl'>Log In</h1>

          <div className='flex flex-col gap-2'>
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
            <Error isVisible={!!loginError}>{loginError}</Error>
          </div>

          <div className='flex flex-col gap-2'>
            {isLoading ? (
              <Button.Loading sx={{ padding: '12px' }} />
            ) : (
              <Button.Primary
                type='submit'
                sx={{ padding: '12px', fontSize: '16px' }}
                onClick={handleLogin}
              >
                Log In
              </Button.Primary>
            )}
            <button
              type='submit'
              onClick={handleGoogleSignUp}
              className='flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-black bg-white px-4 py-3 text-center'
            >
              <Image src='/images/google.png' alt='Google Icon' width={20} height={20} />
              Sign In With Google
            </button>
          </div>
        </motion.div>
      </form>
    </>
  )
}

export default Login
