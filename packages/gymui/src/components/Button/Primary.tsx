import { ButtonProps, SCALEHOVER, SCALETAP, DURATION } from './Button'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

export const Primary = ({
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
