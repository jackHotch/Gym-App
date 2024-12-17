import styles from './Item.module.css'
import { motion } from 'framer-motion'
import { DropdownItemProps } from '@/types'

export const Item = ({ id, handleClick, sx, children }: DropdownItemProps) => {
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
