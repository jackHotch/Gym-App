import styles from './Popover.module.css'
import { AnimatePresence, HTMLMotionProps, motion } from 'motion/react'
import { usePopoverContext, useOutsideClick } from './popover-context'
import { forwardRef, useRef } from 'react'

export interface ContentProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  sx?: React.CSSProperties
}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, sx, ...props }, ref) => {
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
            // variants={modalVariants}
            // initial='hidden'
            // animate='visible'
            // exit='exit'
            // transition={{ duration: 0.2 }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }
)
