import styles from './NavBackground.module.css'
import { motion } from 'framer-motion'

export const NavBackground = () => {
  return (
    <motion.div
      className={styles.container}
      transition={{
        layout: {
          duration: 0.5,
          type: 'spring',
          bounce: 0.3,
        },
      }}
      layoutId='Nav-Background'
    />
  )
}
