'use client'

import styles from './DateRangePicker.module.css'
import dayjs, { Dayjs } from 'dayjs'
import { DatePicker } from '../DatePicker'
import { RangeSelector } from '@/components/isolated/Weight'
import { useState } from 'react'
import { useToggle } from '@/hooks'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

interface DateRangePickerProps {
  updateChart: (startDate?: Dayjs, endDate?: Dayjs) => void
}

export const DateRangePicker = ({ updateChart }: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())
  const [isCustom, , openDatePickers, closeDatePickers] = useToggle()

  const handleChange = (start: boolean, date: Dayjs) => {
    start ? setStartDate(date) : setEndDate(date)
    // https://react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value
    console.log(date)
    // console.log(startDate)
    // console.log(endDate)
    if (startDate.isSame(endDate) || startDate.isAfter(endDate)) {
      console.log('DISPLAY ERROR MESSAGE')
      return
    }

    updateChart(startDate, endDate)
  }

  return (
    <LayoutGroup>
      <motion.div className={styles.container}>
        <motion.div key={1} layout='position'>
          <RangeSelector
            updateChart={updateChart}
            openDatePickers={openDatePickers}
            closeDatePickers={closeDatePickers}
          />
        </motion.div>

        <motion.div layout='position'>
          <AnimatePresence>
            {isCustom && (
              <div key={2} className={styles.date_picker_container}>
                <DatePicker
                  value={startDate}
                  setDate={setStartDate}
                  onChange={handleChange}
                  start={true}
                />
                <DatePicker
                  value={endDate}
                  setDate={setEndDate}
                  onChange={handleChange}
                />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  )
}
