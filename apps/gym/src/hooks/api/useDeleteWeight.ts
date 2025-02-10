import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteWeight } from '@/api/weight'

export const useDeleteWeight = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteWeight(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weight'] })
    },
  })
}
