import styles from './modal.module.css'
import { HTMLMotionProps, motion } from 'motion/react'
import { ModalContext } from './modal-context'
import { Trigger } from './modal-trigger'
import { Content } from './modal-content'
import { Header } from './modal-header'
import { Title } from './modal-title'
import { Description } from './modal-description'
import { Footer } from './modal-footer'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Modal = ({ open, onOpenChange, children, sx, ...props }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ open, onOpenChange }}>
      <div style={sx} {...props}>
        {children}
      </div>
    </ModalContext.Provider>
  )
}

Modal.Trigger = Trigger
Modal.Content = Content
Modal.Header = Header
Modal.Title = Title
Modal.Description = Description
Modal.Footer = Footer
