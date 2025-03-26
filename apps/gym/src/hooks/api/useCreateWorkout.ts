import { useMutation } from '@tanstack/react-query'
import { createWorkout } from '@/actions/workout'
import { IWorkout } from '@/types'
import { useRouter } from 'next/navigation'

export const useCreateWorkout = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: (workout: IWorkout[]) => createWorkout(workout),
    onSuccess: () => {
      router.push('/record/workout/finished')
    },
  })
}
