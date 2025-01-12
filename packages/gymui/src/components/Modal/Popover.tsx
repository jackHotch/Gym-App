import styles from './Popover.module.css'
import { CSSProperties, ForwardedRef, ReactElement, forwardRef } from 'react'
import { HTMLMotionProps, motion } from 'motion/react'

export interface PopoverProps extends HTMLMotionProps<'div'> {
  children: ReactElement | ReactElement[]
  sx?: CSSProperties
  ref: any
}

type reactRef = ForwardedRef<HTMLDivElement>

const modalVariants = {
  hidden: {
    scale: 0,
    x: '40%',
    y: '-50%',
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
  },
  exit: {
    scale: 0,
    x: '40%',
    y: '-50%',
  },
}

export const Popover = forwardRef(({ sx, children }: PopoverProps, ref: reactRef) => {
  return (
    <motion.div
      ref={ref}
      style={sx}
      className={styles.container}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {children}
    </motion.div>
  )
})
