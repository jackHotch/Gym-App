import { ButtonProps, PRIMARY_COLOR_HOVER, SCALETAP, DURATION } from './Button'
import { motion } from 'motion/react'

export const Primary = ({
  children = 'Primary',
  size = 'medium',
  sx,
  ...props
}: ButtonProps) => (
  <motion.button
    {...props}
    style={sx}
    className='bg-primary text-white cursor-pointer px-7 py-3 rounded-lg'
    // whileHover={{
    //   backgroundColor: PRIMARY_COLOR_HOVER,
    // }}
    transition={{ duration: DURATION }}
    whileTap={{ scale: SCALETAP }}
  >
    {children}
  </motion.button>
)
