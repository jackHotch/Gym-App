import { ButtonProps, PRIMARY_COLOR_HOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'motion/react'

export const Primary = ({
  children = 'Primary',
  size = 'small',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={`${styles.primary} ${styles[size]}`}
    whileHover={{
      backgroundColor: PRIMARY_COLOR_HOVER,
    }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
