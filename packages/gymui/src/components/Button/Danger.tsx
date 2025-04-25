import { ButtonProps, SCALETAP, DURATION, DANGER_COLOR_HOVER } from './Button'
import styles from './Button.module.css'
import { motion } from 'motion/react'

export const Danger = ({
  children = 'Danger',
  size = 'medium',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={`${styles.danger} ${styles[size]}`}
    whileHover={{
      backgroundColor: DANGER_COLOR_HOVER,
    }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
