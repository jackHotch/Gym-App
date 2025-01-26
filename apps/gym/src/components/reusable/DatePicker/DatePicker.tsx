'use client'

import styles from './DatePicker.module.css'
import { DatePickerProps } from '@/types'
import { Calendar } from '@gymapp/gymui/Calendar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useEffect, useRef } from 'react'
import { useToggle } from '@/hooks'
import { Dayjs } from 'dayjs'
import { AnimatePresence } from 'motion/react'

export const DatePicker = ({
  value,
  onChange = null,
  start = false,
  openCalendar = false,
  sx,
  sxCalendar,
}: DatePickerProps) => {
  const [showCalendar, toggle, _, close] = useToggle(openCalendar)
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

  const convertDate = (date: Dayjs) => {
    return date.format('MM/DD/YYYY')
  }

  const handleChange = (date: any) => {
    onChange(date, start)
    close()
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <div id='date_input' className={styles.date_input} style={sx} onClick={toggle}>
          <input type='text' value={convertDate(value)} readOnly={true} />
          <CalendarMonthIcon id={styles.calendar_icon} />
        </div>

        <AnimatePresence>
          {showCalendar && (
            <div ref={calendarRef}>
              <Calendar
                value={value}
                onChange={(event) => handleChange(event)}
                sx={{
                  // position: 'absolute',
                  // right: '0',
                  // left: '0',
                  ...sxCalendar,
                }}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </LocalizationProvider>
  )
}
