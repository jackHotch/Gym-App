import { getCurrentSplit } from '@/actions/splits'
import { useQuery } from '@tanstack/react-query'

export const useCurrentSplit = () => {
  const response = useQuery({
    queryKey: ['currentSplit'],
    queryFn: () => getCurrentSplit(),
  })
  const isEmpty = !response.isLoading && !response.data
  return { ...response, isEmpty }
}
