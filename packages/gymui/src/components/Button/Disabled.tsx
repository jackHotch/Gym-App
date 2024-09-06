import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Disabled = ({
  children = 'Disabled',
  size = 'small',
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
