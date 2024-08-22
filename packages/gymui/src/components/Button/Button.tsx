import { CSSProperties } from 'react'
import styles from './Button.module.css'
import { HTMLMotionProps, motion } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
  sx?: CSSProperties
  children?: string
}

const SCALEHOVER = 1.05
const SCALETAP = 0.95
const DURATION = 0.15

export const Button = () => <></>

const Primary = ({ sx, children = 'Primary', ...props }: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={styles.primary}
    whileHover={{ scale: SCALEHOVER }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
Button.Primary = Primary

const Secondary = ({ sx, children = 'Secondary', ...props }: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={styles.secondary}
    whileHover={{ scale: SCALEHOVER, backgroundColor: 'var(--blue)', color: 'white' }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
Button.Secondary = Secondary

const Danger = ({ sx, children = 'Danger', ...props }: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className={styles.danger}
    whileHover={{ scale: SCALEHOVER }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
Button.Danger = Danger

const Disabled = ({ sx, children = 'Danger', ...props }: ButtonProps) => (
  <motion.button {...props} disabled style={sx} className={styles.disabled}>
    {children}
  </motion.button>
)
Button.Disabled = Disabled
