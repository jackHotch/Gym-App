import styles from './modal.module.css'
import { HTMLMotionProps, motion } from 'motion/react'
import { ModalContext } from './modal-context'
import { Trigger } from './modal-trigger'
import { Content } from './modal-content'
import { Header } from './modal-header'
import { Title } from './modal-title'
import { Description } from './modal-description'
import { Footer } from './modal-footer'

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

export interface ModalProps extends HTMLMotionProps<'div'> {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Modal = ({ open, onOpenChange, children, sx, ...props }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ open, onOpenChange }}>
      <motion.div data-testid='background' {...props}>
        {children}
      </motion.div>
    </ModalContext.Provider>
  )
}

Modal.Trigger = Trigger
Modal.Content = Content
Modal.Header = Header
Modal.Title = Title
Modal.Description = Description
Modal.Footer = Footer
