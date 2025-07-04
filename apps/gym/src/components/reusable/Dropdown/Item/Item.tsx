import styles from './Item.module.css'
import { motion } from 'motion/react'
import { DropdownItemProps } from '@/types'

export const Item = ({ id, handleClick, sx, children }: DropdownItemProps) => {
  return (
    <motion.div
      className={styles.container}
      style={sx}
      onClick={() => handleClick(id)}
      whileHover={{
        backgroundColor: 'var(--color-light-gray)',
        color: 'var(--color-primary)',
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
