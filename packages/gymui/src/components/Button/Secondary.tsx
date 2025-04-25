import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'motion/react'

export const Secondary = ({
  children = 'Secondary',
  size = 'medium',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={`${styles.secondary} ${styles[size]}`}
    whileHover={{
      backgroundColor: 'var(--primary)',
      color: '#ffffff',
    }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
