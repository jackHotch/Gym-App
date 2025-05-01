import React from 'react'
import styles from './modal.module.css'
import { useModalContext } from './modal-context'

export interface TriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement
  sx?: React.CSSProperties
}

export const Trigger = ({ children, sx, ...props }: TriggerProps) => {
  const { onOpenChange } = useModalContext()
  return React.cloneElement(children, {
    onClick: () => onOpenChange(true),
  })
}
