'use client'

import { DesktopLogo } from '@/components/reusable/Logo/DesktopLogo'
import styles from './reset-password.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'

const ResetPassword = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <DesktopLogo />
        </div>
        <form className={styles.card}>
          <div className={styles.header}>
            <h1>Reset Password</h1>
            <span className={styles.subheading}>
              Reset the password for the account associated with some email
            </span>
          </div>
          <div className={styles.input_container}>
            <Form.Text.Password placeholder='New Password' />
            <Form.Text.Password placeholder='Confirm Password' />
          </div>
          <Button.Primary>Submit</Button.Primary>
        </form>
      </div>
    </>
  )
}

export default ResetPassword
