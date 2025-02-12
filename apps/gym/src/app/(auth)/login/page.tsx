'use client'

import styles from './Login.module.css'
import { useState } from 'react'
import { loginFormData, TextInputChangeEvent } from '@/types'
import { emailRegex, passwordRegex } from '@/constants'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { Error } from '@gymapp/gymui/Error'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/api'
import { motion } from 'motion/react'

const Login = () => {
  const { loginMutation } = useAuth()
  const { mutate: login } = loginMutation()
  const router = useRouter()
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: TextInputChangeEvent, type: string) => {
    const temp = { ...formData }
    temp[type] = e.target.value
    setFormData(temp)
  }

  const validateLoginForm = (formData: loginFormData) => {
    if (!emailRegex.test(formData.email)) return 'Invalid Email Format'
    if (!passwordRegex.test(formData.password)) return 'Invalid Password'
    return null
  }

  const handleLogin = () => {
    const formError = validateLoginForm(formData)
    if (formError) {
      setError(formError)
      return
    } else {
      setError('')
      if (process.env.NODE_ENV != 'development') alert('Not Implemented Yet')
    }

    if (process.env.NODE_ENV == 'development') {
      login(formData, {
        onSuccess: (errorMessage) => {
          if (errorMessage) setError(errorMessage)
          else router.push('/dashboard')
        },
      })
    }
  }
  return (
    <div className={styles.container}>
      <motion.div layout className={styles.card}>
        <h1>Log In</h1>

        <div className={styles.input_container}>
          <Form.Text.Outline
            placeholder='Email Address'
            value={formData.email}
            onChange={(e) => handleChange(e, 'email')}
          />
          <Form.Text.Password
            placeholder='Password'
            value={formData.password}
            onChange={(e) => handleChange(e, 'password')}
          />
          <Error isVisible={error ? true : false}>{error}</Error>
        </div>

        <div className={styles.button_container}>
          <Button.Primary
            type='submit'
            size='medium'
            sx={{ padding: '12px' }}
            onClick={handleLogin}
          >
            Log In
          </Button.Primary>
          <button
            className={styles.google_button}
            onClick={() => alert('Not Implemented Yet')}
          >
            <Image src='/images/google.png' alt='Google Icon' width={20} height={20} />
            Sign In With Google
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
