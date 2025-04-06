import styles from './Dashboard.module.css'
import { createClient } from '@/utils/supabase/server'

const Dashboard = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return (
    <div className={styles.container}>
      Dashboard<p>{data.user.email}</p>
    </div>
  )
}

export default Dashboard
