import { getCurrentWeight } from '@/actions/weight'
import { useQuery } from '@tanstack/react-query'

export const useCurrentWeight = () => {
  const response = useQuery({
    queryKey: ['currentWeight'],
    queryFn: () => getCurrentWeight(),
  })
  const isEmpty = !response.isLoading && !response.data
  return { ...response, isEmpty }
}
