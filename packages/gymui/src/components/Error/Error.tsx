import { HTMLMotionProps } from 'motion/react'
import styles from './Error.module.css'
import { CSSProperties } from 'react'
import { motion } from 'motion/react'

export interface ErrorProps extends HTMLMotionProps<'p'> {
  sx?: CSSProperties
  children: string
  isVisible?: boolean
  fontSize?: string
}

const motionVariants = {
  visible: {
    x: [0, 5, 0],
    transition: {
      duration: 0.2,
      repeat: 3,
    },
  },
}

export const Error = ({
  isVisible,
  fontSize = '16px',
  sx,
  children,
  ...props
}: ErrorProps) => {
  if (!isVisible) return null

  return (
    <motion.p
      {...props}
      className={styles.container}
      style={{ ...sx, fontSize: fontSize }}
      variants={motionVariants}
      animate='visible'
      whileTap='visible'
    >
      {children}
    </motion.p>
  )
}
