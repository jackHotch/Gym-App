import styles from './Hamburger.module.css'
import { HTMLMotionProps, motion } from 'framer-motion'

interface HamburgerProps extends HTMLMotionProps<'button'> {
  active: boolean
}

export const Hamburger = ({ active, ...props }: HamburgerProps) => {
  return (
    <motion.button
      {...props}
      data-testid='hamburger'
      className={styles.container}
      whileHover={{ backgroundColor: 'rgba(149, 149, 149, 0.2)' }}
      animate={active ? 'open' : 'closed'}
    >
      <motion.span
        className={styles.lines}
        style={{
          left: '50%',
          top: '38%',
          x: '-50%',
          y: '-50%',
        }}
        variants={{
          open: {
            top: ['38%', '50%', '50%'],
            rotate: ['0deg', '0deg', '45deg'],
          },
          closed: {
            top: ['50%', '50%', '38%'],
            rotate: ['45deg', '0deg', '0deg'],
          },
        }}
      ></motion.span>
      <motion.span
        className={styles.lines}
        style={{
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
        }}
        variants={{
          open: {
            rotate: ['0deg', '0deg', '-45deg'],
          },
          closed: {
            rotate: ['-45deg', '0deg', '0deg'],
          },
        }}
      ></motion.span>
      <motion.span
        className={styles.lines}
        style={{
          left: '50%',
          bottom: '38%',
          x: '-50%',
          y: '50%',
        }}
        variants={{
          open: {
            bottom: ['38%', '50%', '50%'],
            rotate: ['0deg', '0deg', '45deg'],
          },
          closed: {
            bottom: ['50%', '50%', '38%'],
            rotate: ['45deg', '0deg', '0deg'],
          },
        }}
      ></motion.span>
    </motion.button>
  )
}
