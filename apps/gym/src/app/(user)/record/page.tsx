'use client'

import styles from './Record.module.css'
import Link from 'next/link'
import { useCurrentSplit } from '@/hooks/api/useCurrentSplit'
import { motion } from 'motion/react'
import { Loading } from '@gymapp/gymui/Loading'

const Record = () => {
  const { data: currentSplit } = useCurrentSplit()
  const MotionLink = motion(Link)

  return (
    <>
      <div className={styles.split_name_container}>
        {currentSplit ? (
          <h1 className={styles.split_name}>{currentSplit?.name}</h1>
        ) : (
          <Loading.Text
            fontSize='3rem'
            pulseSize={12}
            sx={{ gap: '20px', height: '57.5px' }}
          >
            Getting your Current Split
          </Loading.Text>
        )}
      </div>

      <MotionLink
        className={styles.button}
        href='/record/workout'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
      >
        Start Workout
      </MotionLink>
    </>
  )
}

export default Record
