import styles from './Popover.module.css'
import { AnimatePresence, HTMLMotionProps, motion } from 'motion/react'
import { usePopoverContext, useOutsideClick } from './popover-context'
import { forwardRef, useRef } from 'react'

export interface ContentProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  sx?: React.CSSProperties
}

const modalVariants = {
  hidden: {
    x: 15,
    y: -15,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    x: 15,
    y: -15,
    opacity: 0,
    scale: 0.8,
  },
}

export const Content = ({ children, sx, ...props }: ContentProps) => {
  const { open, onOpenChange } = usePopoverContext()
  const popoverRef = useRef<any>()
  useOutsideClick(popoverRef, () => onOpenChange(false))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={popoverRef}
          style={sx}
          className={styles.content_container}
          variants={modalVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ duration: 0.08 }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
