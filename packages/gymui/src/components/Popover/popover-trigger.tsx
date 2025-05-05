import React from 'react'
import { usePopoverContext } from './popover-context'

export interface TriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement
  sx?: React.CSSProperties
}

export const Trigger = ({ children, sx, ...props }: TriggerProps) => {
  const { open, onOpenChange } = usePopoverContext()
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation()
      onOpenChange(!open)
    },
    id: 'popover-trigger',
    ...props,
  })
}
