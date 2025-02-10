import { signUpAction, loginAction } from '@/api/users'
import { useMutation } from '@tanstack/react-query'
import { loginFormData, signUpFormData } from '@/types'

export const useAuth = () => {
  const signUpMutation = () => {
    return useMutation({
      mutationFn: (formData: signUpFormData) => signUpAction(formData),
    })
  }

  const loginMutation = () => {
    return useMutation({
      mutationFn: (formData: loginFormData) => loginAction(formData),
    })
  }

  return { signUpMutation, loginMutation }
}
