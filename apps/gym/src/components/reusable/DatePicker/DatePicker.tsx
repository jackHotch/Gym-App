'use client'

import styles from './DatePicker.module.css'
import { Calendar } from '@gymapp/gymui/Calendar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CSSProperties, useEffect, useRef } from 'react'
import { convertDate } from '@/utils/utils'
import { useToggle } from '@/hooks'

interface DatePickerProps {
  sx?: CSSProperties
  sxCalendar?: CSSProperties
  value?: any
  setDate?: (a: any) => void
}

export const DatePicker = ({ value, setDate, sx, sxCalendar }: DatePickerProps) => {
  const [showCalendar, toggle, _, close] = useToggle()
  const calendarRef = useRef<any>()

  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target) &&
        e.target.parentElement.className != 'date_input'
      ) {
        close()
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div id='date_input' className={styles.date_input} style={sx} onClick={toggle}>
        <input type='text' value={convertDate(value)} readOnly={true} />
        <CalendarMonthIcon id={styles.calendar_icon} />
      </div>

      {showCalendar && (
        <div ref={calendarRef} className={styles.calendar_container}>
          <Calendar
            value={value}
            onChange={(newDate: any) => setDate(newDate)}
            sx={{ position: 'absolute', bottom: '-340px', right: '0', ...sxCalendar }}
          />
        </div>
      )}
    </LocalizationProvider>
  )
}
