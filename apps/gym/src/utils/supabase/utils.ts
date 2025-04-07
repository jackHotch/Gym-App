import { createClient } from '@/utils/supabase/server'

export const getSupabaseUserId = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user?.id
}
