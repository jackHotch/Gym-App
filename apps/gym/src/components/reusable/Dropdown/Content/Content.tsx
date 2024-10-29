import styles from './Content.module.css'
import { DropdownProps } from '../Dropdown'
import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

type reactRef = ForwardedRef<HTMLDivElement>

export interface ContentProps extends HTMLMotionProps<'div'> {
  sx?: CSSProperties
  children: ReactNode | ReactNode[]
}

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
  ({ sx, children, ...props }: ContentProps, ref: reactRef) => {
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
