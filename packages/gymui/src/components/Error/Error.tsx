import { HTMLMotionProps } from 'framer-motion'
import styles from './Error.module.css'
import { CSSProperties } from 'react'
import { motion } from 'framer-motion'

export interface ErrorProps extends HTMLMotionProps<'div'> {
  sx?: CSSProperties
  children: string
}

const motionVariants = {
  visible: {
    x: [0, 5, 0],
    transition: {
      duration: 0.2,
      repeat: 4,
    },
  },
}

export const Error = ({ sx, children, ...props }: ErrorProps) => {
  return (
    <motion.div
      {...props}
      className={styles.container}
      style={sx}
      variants={motionVariants}
      animate='visible'
    >
      {children}
    </motion.div>
  )
}
