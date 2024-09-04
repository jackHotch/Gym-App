import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Primary = ({
  children = 'Primary',
  size = 'small',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={{
      ...sx,
    }}
    className={`${styles.primary} ${styles[size]}`}
    whileHover={{
      scale: SCALEHOVER,
    }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
