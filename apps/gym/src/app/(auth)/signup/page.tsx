'use client'

import styles from './SignUp.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { useState } from 'react'
import Image from 'next/image'
import { Error } from '@gymapp/gymui/Error'
import { motion } from 'motion/react'
import { signUpFormData, TextInputChangeEvent } from '@/types'
import { useAuth } from '@/hooks/api'
import { useRouter } from 'next/navigation'
import { emailRegex, passwordRegex } from '@/constants'

const SignUp = () => {
  const { signUpMutation } = useAuth()
  const { mutate: signUp } = signUpMutation()
  const router = useRouter()
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (e: TextInputChangeEvent, type: string) => {
    const temp = { ...formData }
    temp[type] = e.target.value
    setFormData(temp)
  }

  const validateSignUpForm = (formData: signUpFormData) => {
    if (!formData.firstName) return 'First Name is Required'
    if (!formData.lastName) return 'Last Name is Required'
    if (!emailRegex.test(formData.email)) return 'Invalid Email Format'
    if (!passwordRegex.test(formData.password)) return 'Invalid Password'
    return null
  }

  const handleSignUp = async () => {
    const formError = validateSignUpForm(formData)
    if (formError) {
      setError(formError)
      return
    } else {
      setError('')
      if (process.env.NODE_ENV != 'development') alert('Not Implemented Yet')
    }

    if (process.env.NODE_ENV == 'development') {
      signUp(formData, {
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
        <h1>Create Account</h1>

        <div className={styles.input_container}>
          <Form.Text.Outline
            placeholder='First Name'
            value={formData.firstName}
            onChange={(e) => handleChange(e, 'firstName')}
          />
          <Form.Text.Outline
            placeholder='Last Name'
            value={formData.lastName}
            onChange={(e) => handleChange(e, 'lastName')}
          />
          <Form.Text.Outline
            placeholder='Email Address'
            type='email'
            value={formData.email}
            onChange={(e) => handleChange(e, 'email')}
          />
          <Form.Text.Password
            placeholder='Password'
            type='password'
            value={formData.password}
            onChange={(e) => handleChange(e, 'password')}
          />
          <Error isVisible={error ? true : false}>{error}</Error>
        </div>

        <div className={styles.button_container}>
          <Button.Primary size='medium' sx={{ padding: '12px' }} onClick={handleSignUp}>
            Create Account
          </Button.Primary>
          <button
            className={styles.google_button}
            onClick={() => alert('Not Implemented Yet')}
          >
            <Image src='/images/google.png' alt='Google Icon' width={20} height={20} />
            Sign Up With Google
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default SignUp
