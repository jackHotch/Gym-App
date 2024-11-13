'use client'

import { Button } from '@gymapp/gymui/Button'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <div>
      <div>Home Page</div>
      <Button.Primary onClick={() => router.push('/dashboard')}>Dashboard</Button.Primary>
    </div>
  )
}

export default Home
