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

export const Modal = () => <></>

Modal.FullPage = FullPage
