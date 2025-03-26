import { getFeatureFlags } from '@/actions/featureflag'
import { useQuery } from '@tanstack/react-query'

export const useFeatureFlag = (flagName: string) => {
  return useQuery({
    queryKey: ['featureflags', flagName],
    queryFn: () => getFeatureFlags(flagName),
  })
}
