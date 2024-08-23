import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Disabled = ({
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
    disabled
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
    className={`${styles.disabled} ${styles[size]}`}
  >
    {children}
  </motion.button>
)
