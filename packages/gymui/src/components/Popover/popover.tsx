import { Content } from './popover-content'
import { Item } from './popover-item'
import { Trigger } from './popover-trigger'
import { PopoverContext } from './popover-context'
import styles from './Popover.module.css'

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

const PopoverBase = ({ open, onOpenChange, children, sx, ...props }: PopoverProps) => {
  return (
    <PopoverContext.Provider value={{ open, onOpenChange }}>
      <div style={sx} className={styles.container} {...props}>
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

PopoverBase.displayName = 'Popover'

// Compound component type
type PopoverComponent = typeof PopoverBase & {
  Item: typeof Item
  Trigger: typeof Trigger
  Content: typeof Content
}

// Attach subcomponents
const Popover = Object.assign(PopoverBase, {
  Item,
  Trigger,
  Content,
}) as PopoverComponent

export { Popover }
