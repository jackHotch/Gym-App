import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Secondary = ({
  children = 'Secondary',
  size = 'small',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={{
      ...sx,
    }}
    className={`${styles.secondary} ${styles[size]}`}
    whileHover={{
      scale: SCALEHOVER,
      backgroundColor: 'var(--blue)',
      color: 'white',
    }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
