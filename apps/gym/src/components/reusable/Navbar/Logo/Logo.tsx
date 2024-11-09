import { useRouter } from 'next/navigation'
import styles from './Logo.module.css'
import Image from 'next/image'

export const Logo = () => {
  const router = useRouter()
  return (
    <div className={styles.container} onClick={() => router.push('/')}>
      <Image src='/images/dumbbell-blue.png' alt='logo' width={25} height={25} />
      Gym App
    </div>
  )
}
