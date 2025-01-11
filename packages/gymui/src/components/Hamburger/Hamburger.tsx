import { CSSProperties, ReactNode } from 'react'
import styles from './Hamburger.module.css'
import { HTMLMotionProps, motion } from 'framer-motion'

interface HamburgerProps extends HTMLMotionProps<'button'> {
  sx?: CSSProperties
  children?: ReactNode
  active: boolean
}

export const Hamburger = ({ active, sx, children, ...props }: HamburgerProps) => {
  return (
    <motion.div animate={active ? 'open' : 'closed'}>
      <motion.button
        {...props}
        style={sx}
        data-testid='hamburger'
        className={styles.container}
        variants={{
          open: {
            top: [0, 15, 15],
          },
          closed: {
            top: [15, 15, 0],
          },
        }}
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
              scale: [1, 1.25, 1.5],
            },
            closed: {
              top: ['50%', '50%', '38%'],
              rotate: ['45deg', '0deg', '0deg'],
              scale: [1.5, 1.25, 1],
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
              scale: [1, 1.25, 1.5],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
              scale: [1.5, 1.25, 1],
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
              scale: [1, 1.25, 1.5],
            },
            closed: {
              bottom: ['50%', '50%', '38%'],
              rotate: ['45deg', '0deg', '0deg'],
              scale: [1.5, 1.25, 1],
            },
          }}
        ></motion.span>
      </motion.button>

      {children}
    </motion.div>
  )
}
