import { getCurrentWeight } from '@/api'
import { useQuery } from '@tanstack/react-query'

export const useCurrentWeight = () => {
  return useQuery({
    queryKey: ['currentWeight'],
    queryFn: () => getCurrentWeight(),
  })
}
