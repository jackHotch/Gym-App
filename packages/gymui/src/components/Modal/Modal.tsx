import { CSSProperties, ReactElement, ReactNode } from 'react'
import { HTMLMotionProps } from 'framer-motion'
import { FullPage } from './FullPage'

export interface ModalProps extends HTMLMotionProps<'div'> {
  children?: ReactNode
  sx?: CSSProperties
  width?: string
  height?: string
  onOutsideClick?: () => void
}

export const modalVariants = {
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

export const Modal = () => <></>

Modal.FullPage = FullPage
