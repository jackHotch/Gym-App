import { CSSProperties, ReactNode } from 'react'
import { HTMLMotionProps } from 'motion/react'
import { Overlay } from './Overlay/overlay'
import { Popover } from './Popover'
import { Item } from './Item'

export interface ModalProps extends HTMLMotionProps<'div'> {
  children?: ReactNode
  sx?: CSSProperties
  width?: string
  height?: string
  onOutsideClick?: () => void
}

export const Modal = () => <></>

Modal.Overlay = Overlay
Modal.Popover = Popover
Modal.Item = Item
