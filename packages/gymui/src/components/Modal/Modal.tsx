import { CSSProperties, ReactElement } from 'react'
import { HTMLMotionProps } from 'framer-motion'
import { FullPage } from './FullPage'

export interface ModalProps extends HTMLMotionProps<'div'> {
  children?: ReactElement
  sx?: CSSProperties
}

export const Modal = () => <></>

Modal.FullPage = FullPage
