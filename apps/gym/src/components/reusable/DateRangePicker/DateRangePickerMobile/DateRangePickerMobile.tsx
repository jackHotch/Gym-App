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
  const [showDatePickers, setShowDatePickers] = useState(false)
  const [error, , showError, closeError] = useToggle()

  useEffect(() => {
    setShowDatePickers(false)
    closeError()
  }, [data])

  const handleChange = (date: Dayjs, start?: boolean) => {
    start ? setStartDate(date) : setEndDate(date)
  }

  const handleSubmit = () => {
    if (startDate.isSame(endDate) || startDate.isAfter(endDate)) {
      showError()
    } else {
      closeError()
      filter(startDate, endDate)
      setShowDatePickers(false)
    }
  }

  return (
    <div className={styles.container}>
      <RangeSelector
        filter={filter}
        openDatePickers={() => setShowDatePickers(true)}
        closeDatePickers={() => setShowDatePickers(false)}
        data={data}
        maxWidth='100%'
        width='100%'
      />

      <Modal open={showDatePickers} onOpenChange={setShowDatePickers}>
        <Modal.Content>
          <Modal.Header>Enter a Date Range</Modal.Header>
          <div className={styles.datepickers}>
            <DatePicker
              value={startDate}
              onChange={handleChange}
              start={true}
              sxCalendar={{
                position: 'absolute',
                top: '-30px',
              }}
            />
            <p className={styles.to}>To</p>
            <DatePicker
              value={endDate}
              onChange={handleChange}
              sxCalendar={{
                position: 'absolute',
                top: '-30px',
              }}
            />
          </div>
          <AnimatePresence>{error && <Error>Invalid Range</Error>}</AnimatePresence>
          <Modal.Footer>
            <Button.Primary onClick={handleSubmit}> Set Range</Button.Primary>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  )
}
