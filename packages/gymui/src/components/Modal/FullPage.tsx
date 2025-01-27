import { ModalProps } from './Modal'
import styles from './FullPage.module.css'
import { motion } from 'motion/react'

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

export const FullPage = ({
  children,
  sx,
  width = '400px',
  height = '400px',
  onOutsideClick,
  ...props
}: ModalProps) => {
  return (
    <div data-testid='background' className={styles.background} onClick={onOutsideClick}>
      <motion.div
        {...props}
        style={{ ...sx, maxWidth: width, height: height }}
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        layout
      >
        {children}
      </motion.div>
    </div>
  )
}
