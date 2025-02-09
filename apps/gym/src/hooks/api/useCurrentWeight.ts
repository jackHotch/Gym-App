import { getCurrentWeight } from '@/api/weight'
import { useQuery } from '@tanstack/react-query'

export const useCurrentWeight = () => {
  return useQuery({
    queryKey: ['currentWeight'],
    queryFn: () => getCurrentWeight(),
  })
}
