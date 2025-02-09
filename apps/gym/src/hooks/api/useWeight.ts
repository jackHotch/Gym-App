import { getWeight } from '@/api/weight'
import { useQuery } from '@tanstack/react-query'

export const useWeight = () => {
  return useQuery({
    queryKey: ['weight'],
    queryFn: () => getWeight(),
  })
}
