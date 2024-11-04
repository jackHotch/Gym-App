'use client'

import styles from './DateRangePicker.module.css'
import dayjs, { Dayjs } from 'dayjs'
import { DatePicker } from '../DatePicker'
import { RangeSelector } from '@/components/isolated/Weight'
import { useEffect, useState } from 'react'
import { useToggle } from '@/hooks'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { IWeightData } from '@/app/globals'

interface DateRangePickerProps {
  filter: (startDate?: Dayjs, endDate?: Dayjs) => void
  data: IWeightData[]
}



export const DateRangePicker = ({ filter, data }: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())
  const [isCustom, , openDatePickers, closeDatePickers] = useToggle()
  const [error, , showError, closeError] = useToggle()

  useEffect(() => {
    closeDatePickers()
  }, [data])

  const handleChange = (date: Dayjs, start?: boolean) => {
    if (start) {
      if (date.isSame(endDate) || date.isAfter(endDate)) {
        showError()
        return
      }
      closeError()
      filter(date, endDate)
      setStartDate(date)
    } else {
      if (startDate.isSame(date) || startDate.isAfter(date)) {
        showError()
        return
      }
      closeError()
      filter(startDate, date)
      setEndDate(date)
    }
  }

  return (
    <LayoutGroup>
      <motion.div className={styles.container}>
        <motion.div key={1} layout='position'>
          <RangeSelector
            filter={filter}
            openDatePickers={openDatePickers}
            closeDatePickers={closeDatePickers}
            data={data}
          />
        </motion.div>

        <motion.div layout='position'>
          <AnimatePresence>
            {isCustom && (
              <div key={2} className={styles.date_picker_container}>
                <DatePicker value={startDate} onChange={handleChange} start={true} />
                <DatePicker value={endDate} onChange={handleChange} />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>
          {error && (
            
          )}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  )
}
