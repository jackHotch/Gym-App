'use client'

import styles from './Record.module.css'
import Link from 'next/link'
import { useCurrentSplit } from '@/hooks'
import { motion } from 'framer-motion'
import { duration } from '@mui/material'

const Record = () => {
  const { data: currentSplit } = useCurrentSplit()
  const MotionLink = motion(Link)

  return (
    <>
      <div>
        <h2 className={styles.split_name}>{currentSplit?.name}</h2>
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
