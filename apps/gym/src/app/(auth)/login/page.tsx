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
        <Form.Text.Outline placeholder='Password' />
      </div>

      <div className={styles.button_container}>
        <Button.Primary type='submit' size='medium' sx={{ padding: '12px' }}>
          Log In
        </Button.Primary>
        <Button.Secondary
          size='medium'
          sx={{ padding: '12px' }}
          onClick={() => alert('Not Implemented Yet')}
        >
          Sign In With Google
        </Button.Secondary>
      </div>
    </Form>
  )
}

export default Login
