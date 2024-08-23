import { CSSProperties } from 'react'
import styles from './Button.module.css'
import { HTMLMotionProps, motion } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
  sx?: CSSProperties
  children?: string
  mx?: string
  my?: string
  px?: string
  py?: string
  width?: string
  height?: string
}

const SCALEHOVER = 1.05
const SCALETAP = 0.95
const DURATION = 0.15

export const Button = () => <></>

const Primary = ({
  children = 'Primary',
  sx,
  my,
  mx,
  py,
  px,
  width,
  height,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={{
      ...sx,
      marginTop: my,
      marginBottom: my,
      marginLeft: mx,
      marginRight: mx,
      paddingTop: py,
      paddingBottom: py,
      paddingLeft: px,
      paddingRight: px,
      width: width,
      height: height,
    }}
    className={styles.primary}
    whileHover={{
      scale: SCALEHOVER,
      boxShadow: 'rgba(150, 150, 150, 0.5) 0px 2px 8px 2px',
    }}
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
    whileHover={{
      scale: SCALEHOVER,
      backgroundColor: 'var(--blue)',
      color: 'white',
      boxShadow: 'rgba(150, 150, 150, 0.5) 0px 2px 8px 2px',
    }}
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
    whileHover={{
      scale: SCALEHOVER,
      boxShadow: 'rgba(150, 150, 150, 0.5) 0px 2px 8px 2px',
    }}
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
