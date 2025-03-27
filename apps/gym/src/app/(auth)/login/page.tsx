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
// import { useFeatureFlag } from '@/hooks/api'
import { motion } from 'motion/react'
import { login } from '@/actions/auth'

const Login = () => {
  // const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const router = useRouter()
  const [error, setError] = useState('')
  const [formDat, setFormDat] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: TextInputChangeEvent) => {
    setFormDat((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const validateLoginForm = (formData: loginFormData) => {
    if (!emailRegex.test(formData.email)) return 'Invalid Email Format'
    if (!passwordRegex.test(formData.password)) return 'Invalid Password'
    return null
  }

  // const handleLogin = () => {
  //   const formError = validateLoginForm(formData)
  //   if (formError) {
  //     setError(formError)
  //     return
  //   } else {
  //     setError('')
  //     if (authEnabled == false) alert('Not Implemented Yet')
  //   }

  //   if (authEnabled) {
  //     login(formData, {
  //       onSuccess: (errorMessage) => {
  //         if (errorMessage) setError(errorMessage)
  //         else router.push('/dashboard')
  //       },
  //     })
  //   }
  // }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault() // Prevent default form submission
    const formData = new FormData()
    formData.append('email', formDat.email)
    formData.append('password', formDat.password)

    await login(formData) // Call login action
  }

  return (
    <form className={styles.container}>
      <motion.div layout className={styles.card}>
        <h1>Log In</h1>

        <div className={styles.input_container}>
          <Form.Text.Outline
            placeholder='Email Address'
            name='email'
            value={formDat.email}
            onChange={handleChange}
          />
          <Form.Text.Password
            placeholder='Password'
            name='password'
            value={formDat.password}
            onChange={handleChange}
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
    </form>
  )
}

export default Login
