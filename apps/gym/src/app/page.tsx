'use client'

import { Button } from '@gymapp/gymui/Button'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  return (
    <div>
      <Button onClick={() => router.push('/dashboard')}>Dashboard</Button>
    </div>
  )
}

export default Home
