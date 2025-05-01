import React from 'react'
import styles from './overlay.module.css'
import { useOverlayContext } from './overlay-context'

export interface TriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement
  sx?: React.CSSProperties
}

export const Trigger = ({ children, sx, ...props }: TriggerProps) => {
  const { onOpenChange } = useOverlayContext()
  return React.cloneElement(children, {
    onClick: () => onOpenChange(true),
  })
}
