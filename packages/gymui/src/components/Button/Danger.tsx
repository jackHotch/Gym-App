import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Danger = ({
  children = 'Danger',
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
    className={`${styles.danger} ${styles[size]}`}
    whileHover={{
      scale: SCALEHOVER,
    }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
