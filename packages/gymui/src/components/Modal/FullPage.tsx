import { ModalProps, modalVariants } from './Modal'
import styles from './Modal.module.css'
import { motion } from 'framer-motion'

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
        style={{ ...sx, width: width, height: height }}
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {children}
      </motion.div>
    </div>
  )
}
