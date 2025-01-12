import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'motion/react'

export const Danger = ({
  children = 'Danger',
  size = 'small',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={`${styles.danger} ${styles[size]}`}
    whileHover={{
      scale: SCALEHOVER,
    }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
