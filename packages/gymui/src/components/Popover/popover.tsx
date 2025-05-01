import styles from './Popover.module.css'
import { ForwardedRef, forwardRef } from 'react'
import { HTMLMotionProps, motion } from 'motion/react'
import { Item } from './Item'

export interface PopoverProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
  ref: any
}

type reactRef = ForwardedRef<HTMLDivElement>

const modalVariants = {
  hidden: {
    scale: 0,
    x: '40%',
    y: '-50%',
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
  },
  exit: {
    scale: 0,
    x: '40%',
    y: '-50%',
  },
}

const Popover = forwardRef(({ sx, children }: PopoverProps, ref: reactRef) => {
  return (
    <motion.div
      ref={ref}
      style={sx}
      className={styles.container}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {children}
    </motion.div>
  )
})

type PopoverComponent = typeof Popover & {
  Item: typeof Item
}

// Merge the subcomponent using Object.assign (preserves type)
const PopoverWithCompound: PopoverComponent = Object.assign(Popover, {
  Item,
})

// Export the compound version
export { PopoverWithCompound as Popover }
