'use client'

import styles from './DateRangePickerMobile.module.css'
import { DateRangePickerProps } from '@/types'
import { useEffect, useState } from 'react'
import { useToggle } from '@/hooks'
import dayjs, { Dayjs } from 'dayjs'
import { RangeSelector } from '../../RangeSelector'
import { AnimatePresence } from 'motion/react'
import { DatePicker } from '../../DatePicker/DatePicker'
import { Error } from '@gymapp/gymui/Error'
import { Modal } from '@gymapp/gymui/Modal'
import { Button } from '@gymapp/gymui/Button'

export const DateRangePickerMobile = ({ filter, data }: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())
  const [isCustom, , openDatePickers, closeDatePickers] = useToggle()
  const [error, , showError, closeError] = useToggle()

  useEffect(() => {
    closeDatePickers()
    closeError()
  }, [data])

  const handleChange = (date: Dayjs, start?: boolean) => {
    start ? setStartDate(date) : setEndDate(date)
  }

  const handleSubmit = () => {
    if (startDate.isSame(endDate) || startDate.isAfter(endDate)) showError()
    else {
      filter(startDate, endDate)
      closeDatePickers()
    }

    // if (start) {
    //   if (date.isSame(endDate) || date.isAfter(endDate)) {
    //     showError()
    //     return
    //   }
    //   closeError()
    //   filter(date, endDate)
    //   setStartDate(date)
    // } else {
    //   if (startDate.isSame(date) || startDate.isAfter(date)) {
    //     showError()
    //     return
    //   }
    //   closeError()
    //   filter(startDate, date)
    //   setEndDate(date)
    // }
  }

  return (
    <div className={styles.container}>
      <RangeSelector
        filter={filter}
        openDatePickers={openDatePickers}
        closeDatePickers={closeDatePickers}
        data={data}
      />

      <AnimatePresence>
        {isCustom && (
          <Modal.FullPage
            height='max-content'
            onOutsideClick={closeDatePickers}
            sx={{ gap: '24px' }}
          >
            <p className={styles.header}>Enter a Date Range</p>
            <div className={styles.datepickers}>
              <DatePicker value={startDate} onChange={handleChange} start={true} />
              <p className={styles.to}>To</p>
              <DatePicker value={endDate} onChange={handleChange} />
            </div>
            <Button.Primary onClick={handleSubmit}> Set Range</Button.Primary>
          </Modal.FullPage>
        )}
      </AnimatePresence>
      <AnimatePresence>{error && <Error>Invalid Range</Error>}</AnimatePresence>
    </div>
  )
}
