'use client'

import dayjs from 'dayjs'
import styles from './DateRangePicker.module.css'
import { DatePicker } from '../DatePicker'
import { RangeSelector } from '@/components/isolated/Weight'
import { useState } from 'react'

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())

  // const handleClick = () => {
  //   click(dayjs('1/1/2022'), dayjs('8/1/2022'))
  // }
  return (
    <div className={styles.container}>
      <RangeSelector />
      <DatePicker value={startDate} setDate={setStartDate} />
      <DatePicker value={endDate} setDate={setEndDate} />
    </div>
  )
}
