'use client'

import styles from './SignUp.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { FormEvent, TextInputChangeEvent } from '@/types'
import { useState } from 'react'
import { useAuth } from '@/hooks/api'
import Image from 'next/image'
import { validateSignUpForm } from '@/api/users'

const SignUp = () => {
  const { signUpMutation } = useAuth()
  const { mutate: signUp } = signUpMutation()
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

  const handleSignUp = () => {
    const res = validateSignUpForm(formData)
    if (res.valid) return signUp(formData)
    console.log(res.message)
    setError(res.message)
  }

  return (
    <Form className={styles.container}>
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
        <p>{error ? error : ''}</p>
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
          <Image src='/images/google.png' alt='google icon' width={20} height={20} />
          Sign Up With Google
        </button>
      </div>
    </Form>
  )
}

export default SignUp
