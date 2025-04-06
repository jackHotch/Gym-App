import { getWeight } from '@/actions/weight'
import { useQuery } from '@tanstack/react-query'

export const useWeight = () => {
  const response = useQuery({
    queryKey: ['weight'],
    queryFn: () => getWeight(),
  })
  const isEmpty = !response.isLoading && !response.data
  return { ...response, isEmpty }
}
