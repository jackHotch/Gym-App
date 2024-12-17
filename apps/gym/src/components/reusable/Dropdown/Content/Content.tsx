import styles from './Content.module.css'
import { DropdownContentProps } from '@/types'
import { ForwardedRef, forwardRef } from 'react'
import { motion } from 'framer-motion'

type reactRef = ForwardedRef<HTMLDivElement>

const motionVariants = {
  hidden: {
    opacity: 0,
    y: '-5%',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: '-5%',
  },
}

export const Content = forwardRef(
  ({ sx, children, ...props }: DropdownContentProps, ref: reactRef) => {
    return (
      <motion.div
        {...props}
        ref={ref}
        className={styles.container}
        style={sx}
        variants={motionVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {children}
      </motion.div>
    )
  }
)
