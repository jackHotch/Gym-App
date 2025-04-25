import { ButtonProps } from './Button'
import styles from './Button.module.css'
import { motion } from 'motion/react'

export const Disabled = ({
  children = 'Disabled',
  size = 'medium',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    disabled
    style={sx}
    className={`${styles.disabled} ${styles[size]}`}
  >
    {children}
  </motion.button>
)
