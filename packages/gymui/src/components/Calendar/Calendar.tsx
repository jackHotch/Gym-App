import styles from './Calendar.module.css'
import { HTMLMotionProps } from 'motion/react'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { CSSProperties } from 'react'
import { motion } from 'motion/react'

interface CalendarProps extends HTMLMotionProps<'div'> {
  sx?: CSSProperties
  value?: any
  onChange?: (a: any) => void
}

const motionVariants = {
  hidden: {
    scale: 0,
    x: '40%',
    y: '-50%',
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 175,
      damping: 18,
    },
  },
  exit: {
    scale: 0,
    x: '40%',
    y: '-50%',
    transition: {
      duration: 0.2,
    },
  },
}

export const Calendar = ({ value, onChange, sx, ...props }: CalendarProps) => {
  return (
    <motion.div
      className={styles.container}
      style={sx}
      onClick={(e) => e.stopPropagation()}
      variants={motionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      {...props}
    >
      <DateCalendar value={value} onChange={onChange} />
    </motion.div>
  )
}
