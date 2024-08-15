import { useQuery } from '@tanstack/react-query'
import { getWorkoutNumber } from '@/api'

export const useWorkoutNumber = () => {
  return useQuery({
    queryKey: ['workout number'],
    queryFn: () => getWorkoutNumber(),
  })
}
