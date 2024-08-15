import { useQuery } from '@tanstack/react-query'
import { getExercises } from '@/api'

export const useExercises = () => {
  return useQuery({
    queryKey: ['exercises'],
    queryFn: () => getExercises(),
  })
}
