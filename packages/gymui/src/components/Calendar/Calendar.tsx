import styles from './Calendar.module.css'
import { HTMLMotionProps } from 'framer-motion'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { CSSProperties } from 'react'

interface CalendarProps extends HTMLMotionProps<'div'> {
  sx?: CSSProperties
  value?: any
  onChange?: (a: any) => void
}

export const Calendar = ({ value, onChange, sx }: CalendarProps) => {
  return (
    <div className={styles.container} style={sx} onClick={(e) => e.stopPropagation()}>
      <DateCalendar value={value} onChange={onChange} />
    </div>
  )
}
