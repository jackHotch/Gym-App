'use client'

import styles from './forgot-password.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { useState } from 'react'
import { useFeatureFlag } from '@/hooks/api'
import { sendPasswordResetEmail } from '@/actions/auth'
import { Error } from '@gymapp/gymui/Error'
import { motion } from 'motion/react'

const ForgotPassword = () => {
  const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (authEnabled) {
      const errorMessage = await sendPasswordResetEmail(email)
      if (errorMessage) setError(errorMessage)
      else setSuccess(true)
    } else alert('Not Implemented Yet!')
  }

  return (
    <div className={styles.container}>
      <motion.form layout className={styles.card}>
        <div className={styles.header}>
          <h1>Forgot Password</h1>
          <span className={styles.subheading}>
            Please enter your email and we'll send you instructions to create a new
            password
          </span>
        </div>
        <div className={styles.input_container}>
          <Form.Text.Outline
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Error isVisible={error ? true : false}>{error}</Error>
          {success && <span>Check your email for further instructions</span>}
        </div>
        <Button.Primary type='submit' onClick={handleSubmit}>
          Send Email
        </Button.Primary>
      </motion.form>
    </div>
  )
}

export default ForgotPassword
