'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log('error with login')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // const email = (formData.get('email') as string).trim()
  // const password = (formData.get('password') as string).trim()

  // console.log('Supabase Signup Payload:', { email, password })

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: 'bob@gmail.com',
    password: 'bobbobert',
    options: {
      data: {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
      },
    },
  }

  console.log(data)

  const { data: da, error } = await supabase.auth.signUp(data)
  console.log('Supabase: ', { da, error })

  if (error) {
    console.log('error with sign up')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}
