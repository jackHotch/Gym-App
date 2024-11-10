import { useMutation } from '@tanstack/react-query'
import { createWorkout } from '@/api'
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
