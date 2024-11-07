import { ButtonProps } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Text = ({ children, sx, ...props }: ButtonProps) => (
  <motion.button {...props} style={sx} className={styles.text}>
    {children}
  </motion.button>
)
