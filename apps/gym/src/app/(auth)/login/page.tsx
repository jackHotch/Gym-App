'use client'

import styles from './Login.module.css'
import { Form } from '@gymapp/gymui/Form'
import { Button } from '@gymapp/gymui/Button'

const Login = () => {
  return (
    <Form className={styles.container}>
      <h1>Log In</h1>

      <div className={styles.input_container}>
        <Form.Text.Outline placeholder='Email Address' />
        <Form.Text.Password placeholder='Password' />
      </div>

      <div className={styles.button_container}>
        <Button.Primary
          type='submit'
          size='medium'
          sx={{ padding: '12px' }}
          onClick={() => alert('Not Implemented Yet')}
        >
          Log In
        </Button.Primary>
        <button
          className={styles.google_button}
          onClick={() => alert('Not Implemented Yet')}
        >
          <img src='/images/google.png' width={20} />
          Sign In With Google
        </button>
      </div>
    </Form>
  )
}

export default Login
