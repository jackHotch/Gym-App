import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createExercise } from '@/api/exercise'

export const useCreateExercise = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (name: string) => createExercise(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exercises'] })
    },
  })
}
