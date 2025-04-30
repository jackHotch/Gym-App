import styles from './overlay.module.css'
import { HTMLMotionProps, motion } from 'motion/react'

const modalVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 16,
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export interface OverlayProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Overlay = ({ children, sx, ...props }: OverlayProps) => {
  return (
    <motion.div data-testid='background' className={styles.background} {...props}>
      {children}
    </motion.div>
  )
}
