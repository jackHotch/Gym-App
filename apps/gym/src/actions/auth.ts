'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export const login = async (formData: FormData) => {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log('Error with login: ' + error)
    return error.message
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export const signup = async (formData: FormData) => {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        first_name: formData.get('firstName') as string,
        last_name: formData.get('lastName') as string,
      },
    },
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log('Error with sign up' + error)
    return error.message
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export const signout = async () => {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log('Error with sign out' + error)
    return error.message
  }

  redirect('/login')
}

export const signInWithGoogle = async () => {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })

  if (error) {
    console.log('Error with google sign in' + error)
    return error.message
  }

  redirect('/dashboard')
}
