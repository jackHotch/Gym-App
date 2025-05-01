import styles from './overlay.module.css'
import { HTMLMotionProps, motion } from 'motion/react'
import { OverlayContext } from './overlay-context'
import { Trigger } from './overlay-trigger'
import { Content } from './overlay-content'
import { Header } from './overlay-header'
import { Title } from './overlay-title'
import { Description } from './overlay-description'
import { Footer } from './overlay-footer'

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

export interface OverlayProps extends HTMLMotionProps<'div'> {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Overlay = ({ open, onOpenChange, children, sx, ...props }: OverlayProps) => {
  return (
    <OverlayContext.Provider value={{ open, onOpenChange }}>
      <motion.div data-testid='background' {...props}>
        {children}
      </motion.div>
    </OverlayContext.Provider>
  )
}

Overlay.Trigger = Trigger
Overlay.Content = Content
Overlay.Header = Header
Overlay.Title = Title
Overlay.Description = Description
Overlay.Footer = Footer
