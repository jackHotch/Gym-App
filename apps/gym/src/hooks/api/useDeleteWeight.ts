import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteWeight } from '@/actions/weight'

export const useDeleteWeight = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteWeight(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weight'] })
    },
  })
}
