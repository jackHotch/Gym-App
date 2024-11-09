import { useRouter } from 'next/navigation'
import styles from './ProfileIcon.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const ProfileIcon = () => {
  const router = useRouter()
  return (
    <div className={styles.container} onClick={() => router.push('/profile')}>
      <AccountCircleIcon color='primary' sx={{ width: '40px', height: '40px' }} />
    </div>
  )
}
