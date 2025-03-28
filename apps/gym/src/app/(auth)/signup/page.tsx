'use client'

import styles from './SignUp.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { useState } from 'react'
import Image from 'next/image'
import { Error } from '@gymapp/gymui/Error'
import { motion } from 'motion/react'
import { signUpFormData, TextInputChangeEvent } from '@/types'
import { useFeatureFlag } from '@/hooks/api'
import { emailRegex, passwordRegex } from '@/constants'
import { signup } from '@/actions/auth'

const SignUp = () => {
  const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const [error, setError] = useState('')
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

  const validateSignUpForm = (formData: signUpFormData) => {
    if (!formData.firstName) return 'First Name is Required'
    if (!formData.lastName) return 'Last Name is Required'
    if (!emailRegex.test(formData.email)) return 'Invalid Email Format'
    if (!passwordRegex.test(formData.password)) return 'Invalid Password'
    return null
  }

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('firstName', signUpData.firstName)
    formData.append('lastName', signUpData.lastName)
    formData.append('email', signUpData.email)
    formData.append('password', signUpData.password)

    if (authEnabled) await signup(formData)
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
          <Error isVisible={error ? true : false}>{error}</Error>
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
            onClick={() => alert('Not Implemented Yet')}
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
