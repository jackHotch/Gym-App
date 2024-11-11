import styles from './Item.module.css'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'

export interface ItemProps {
  sx?: CSSProperties
  children: string
  handleClick: (a: number) => void
  id: number
}

export const Item = ({ id, handleClick, sx, children }: ItemProps) => {
  return (
    <motion.div
      className={styles.container}
      style={sx}
      onClick={() => handleClick(id)}
      whileHover={{
        backgroundColor: 'var(--light-gray)',
        color: 'var(--blue)',
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
