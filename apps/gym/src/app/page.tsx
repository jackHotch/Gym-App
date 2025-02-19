'use client'

import { getFeatureFlags } from '@/api/featureflag'
import { useFeatureFlag } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()
  // const { data } = useFeatureFlag('Auth_Functionality')

  // console.log(auth)
  useEffect(() => {
    const func = async () => {
      const res = await getFeatureFlags('Welcome_Message')
      console.log(res)
    }
    func()
  }, [])
  return (
    <div>
      <div>Home Page</div>
      <Button.Primary onClick={() => router.push('/dashboard')}>Dashboard</Button.Primary>
    </div>
  )
}

export default Home
