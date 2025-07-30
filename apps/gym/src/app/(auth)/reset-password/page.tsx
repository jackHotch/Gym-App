'use client'

import styles from './reset-password.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'
import { useEffect, useState } from 'react'
import { useFeatureFlag } from '@/hooks/api'
import { updatePassword } from '@/actions/auth'
import { Error } from '@gymapp/gymui/Error'
import { motion } from 'motion/react'
// import { useSearchParams } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { passwordSchema } from '@/constants'

const ResetPassword = () => {
  // const searchParams = useSearchParams()
  // const supabaseSessionCode = searchParams.get('code')
  const { data: authEnabled } = useFeatureFlag('Auth_Functionality')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const createSessionFromCode = async (code: string | null) => {
    if (!code) {
      console.error('No code provided in URL.')
      return 'No code provided.'
    }

    const supabase = await createClient()

    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('Supabase session exchange error:', error.message)
        return error.message
      }

      console.log('Session successfully exchanged')
      return null
    } catch (err) {
      console.error('Unexpected error:', err)
      return 'An unexpected error occurred.'
    }
  }

  // useEffect(() => {
  //   const createSession = async () => await createSessionFromCode(supabaseSessionCode)
  //   createSession()
  // }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    if (authEnabled) {
      if (newPassword === confirmPassword) {
        const { success, error } = passwordSchema.safeParse(newPassword)

        if (success) {
          const errorMessage = await updatePassword(newPassword)

          if (errorMessage) {
            setError(errorMessage)
            setIsLoading(false)
          } else setSuccess(true)
        } else {
          setError(error.issues[0].message)
          setIsLoading(false)
        }
      } else {
        setError('Passwords must match')
        setIsLoading(false)
      }
    } else {
      alert('Not Implemented Yet!')
    }
  }

  return (
    <div className={styles.container}>
      <motion.form layout className={styles.card}>
        <div className={styles.header}>
          <h1>Reset Password</h1>
          <span className={styles.subheading}>Please enter your new password</span>
        </div>
        <div className={styles.input_container}>
          <Form.Text.Password
            placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Form.Text.Password
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Error isVisible={error ? true : false}>{error}</Error>
          {success && <span>You have successfully changed your password</span>}
        </div>
        {isLoading ? (
          <Button variant='loading' className='p-3' />
        ) : (
          <Button type='submit' className='p-3' onClick={handleSubmit}>
            Change Password
          </Button>
        )}
      </motion.form>
    </div>
  )
}

export default ResetPassword
