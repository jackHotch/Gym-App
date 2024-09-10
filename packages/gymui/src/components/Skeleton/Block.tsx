import { CSSProperties } from 'react'
import styles from './Skeleton.module.css'
import { motion } from 'framer-motion'

export interface BlockProps {
  sx?: CSSProperties
  count?: number
  width?: string
  height?: string
}

export const Block = ({ sx, count = 1, width, height = '24px' }: BlockProps) => {
  return (
    <>
      {[...Array(count)].map((_, key) => (
        <motion.div
          key={key}
          className={styles.line}
          data-testid='block'
          style={{ width: width, height: height, ...sx }}
          animate={{ backgroundColor: 'var(--darkgrey)' }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: 'reverse',
            delay: key * 0.1,
          }}
        />
      ))}
    </>
  )
}
