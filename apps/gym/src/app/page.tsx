'use client'

import { Button } from '@gymapp/gymui/Button'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  return (
    <div>
      <Button.Primary onClick={() => router.push('/dashboard')} size='medium'>
        Dashboard
      </Button.Primary>
    </div>
  )
}

export default Home
