import { getCurrentWeight } from '@/actions/weight'
import { useQuery } from '@tanstack/react-query'

export const useCurrentWeight = () => {
  return useQuery({
    queryKey: ['currentWeight'],
    queryFn: () => getCurrentWeight(),
  })
}
