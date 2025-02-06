'use client'

import styles from './SignUp.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'

const SignUp = () => {
  return (
    <Form className={styles.container}>
      <h1>Create Account</h1>

      <div className={styles.input_container}>
        <Form.Text.Outline placeholder='First Name' />
        <Form.Text.Outline placeholder='Last Name' />
        <Form.Text.Outline placeholder='Email Address' type='email' />
        <Form.Text.Password placeholder='Password' type='password' />
      </div>

      <div className={styles.button_container}>
        <Button.Primary
          type='submit'
          size='medium'
          sx={{ padding: '12px' }}
          onClick={() => alert('Not Implemented Yet')}
        >
          Create Account
        </Button.Primary>
        <button
          className={styles.google_button}
          onClick={() => alert('Not Implemented Yet')}
        >
          <img src='/images/google.png' width={20} />
          Sign Up With Google
        </button>
      </div>
    </Form>
  )
}

export default SignUp
