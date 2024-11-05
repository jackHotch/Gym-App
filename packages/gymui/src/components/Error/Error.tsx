import { HTMLMotionProps } from 'framer-motion'
import styles from './Error.module.css'
import { CSSProperties } from 'react'
import { motion } from 'framer-motion'

export interface ErrorProps extends HTMLMotionProps<'p'> {
  sx?: CSSProperties
  children: string
  visible?: boolean
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
    <motion.p
      {...props}
      className={styles.container}
      style={sx}
      variants={motionVariants}
      animate='visible'
      whileTap='visible'
    >
      {children}
    </motion.p>
  )
}
