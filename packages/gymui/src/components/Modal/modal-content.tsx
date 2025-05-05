import styles from './modal.module.css'
import { useModalContext } from './modal-context'
import { AnimatePresence, motion } from 'motion/react'

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  sx?: React.CSSProperties
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
}

export const Content = ({ children, sx, ...props }: ContentProps) => {
  const { open, onOpenChange } = useModalContext()

  return (
    <AnimatePresence>
      {open && (
        <div className={styles.background} onClick={() => onOpenChange(false)} {...props}>
          <motion.div
            style={sx}
            className={styles.content_container}
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
