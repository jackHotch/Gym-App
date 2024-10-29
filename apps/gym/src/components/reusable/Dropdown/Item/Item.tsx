import styles from './Item.module.css'
import { DropdownProps } from '../Dropdown'
import { motion } from 'framer-motion'
import { CSSProperties, ReactNode } from 'react'

interface ItemProps extends DropdownProps {
  children: string
  handleClick: (a: string) => void
}

export const Item = ({ handleClick, sx, children, ...props }: ItemProps) => {
  return (
    <motion.div
      className={styles.container}
      style={sx}
      onClick={() => handleClick(children)}
      whileHover={{ backgroundColor: 'var(--lightgray)', color: 'var(--blue)' }}
    >
      {children}
    </motion.div>
  )
}
