import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Secondary = ({
  children = 'Secondary',
  size = 'small',
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
