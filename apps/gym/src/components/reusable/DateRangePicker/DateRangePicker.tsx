'use client'

import dayjs, { Dayjs } from 'dayjs'
import styles from './DateRangePicker.module.css'
import { DatePicker } from '../DatePicker'
import { RangeSelector } from '@/components/isolated/Weight'
import { useState } from 'react'
import { useToggle } from '@/hooks'

interface DateRangePickerProps {
  updateChart: (startDate?: Dayjs, endDate?: Dayjs) => void
}

export const DateRangePicker = ({ updateChart }: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())
  const [isCustom, , openDatePickers, closeDatePickers] = useToggle()

  return (
    <div className={styles.container}>
      <RangeSelector
        updateChart={updateChart}
        openDatePickers={openDatePickers}
        closeDatePickers={closeDatePickers}
      />
      {isCustom && (
        <div className={styles.date_picker_container}>
          <DatePicker value={startDate} setDate={setStartDate} />
          <DatePicker value={endDate} setDate={setEndDate} />
        </div>
      )}
    </div>
  )
}
