import { useQuery } from '@tanstack/react-query'
import { getWorkoutNumber } from '@/actions/workout'

export const useWorkoutNumber = () => {
  return useQuery({
    queryKey: ['workout number'],
    queryFn: () => getWorkoutNumber(),
  })
}
