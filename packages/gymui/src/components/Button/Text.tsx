import { ButtonProps } from './Button'
import styles from './Button.module.css'
import { motion } from 'motion/react'

export const Text = ({ children, sx, ...props }: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={styles.text}
    whileHover={{ textDecoration: 'underline' }}
  >
    {children}
  </motion.button>
)
