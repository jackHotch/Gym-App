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
                <DatePicker value={startDate} setDate={setStartDate} />
                <DatePicker value={endDate} setDate={setEndDate} />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  )
}
