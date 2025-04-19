'use client'

import { useState } from 'react'
import styles from './AddWeightModal.module.css'
import { AddWeightModalProps } from '@/types'
import { FormEvent, TextInputChangeEvent } from '@/types'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useAddWeight, useWindowDimensions } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { Modal } from '@gymapp/gymui/Modal'
import { CloseIcon } from '@gymapp/gymui/CloseIcon'
import { Form } from '@gymapp/gymui/Form'
import { DatePicker } from '@/components/reusable'

export const AddWeightModal = ({ closeModal }: AddWeightModalProps) => {
  const [weight, setWeight] = useState('')
  const [date, setDate] = useState<any>(dayjs())
  const { mutate: addWeight } = useAddWeight()
  const screen = useWindowDimensions()

  const updateWeight = (e: TextInputChangeEvent) => {
    setWeight(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addWeight({ weight: weight, date: date.format('YYYY-MM-DD') })
    closeModal()
  }

  const handleChange = (d: any) => {
    setDate(d)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal.FullPage height='260px' onOutsideClick={closeModal} sx={{ padding: '20px' }}>
        <Form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.close_btn}>
                <CloseIcon onClick={closeModal} />
              </div>
              <h4 className={styles.title}>New Entry</h4>
            </div>

            <div className={styles.entry}>
              <div className={styles.weight}>
                <label>Weight: </label>
                <Form.Text.Outline
                  placeholder='lbs'
                  value={weight}
                  onChange={updateWeight}
                  sx={{ width: '215px', margin: '10px 0 0 10px' }}
                />
              </div>

              <div className={styles.date}>
                <label>Date: </label>
                <DatePicker
                  value={date}
                  onChange={handleChange}
                  sx={{ margin: '10px 0 0 10px' }}
                  sxCalendar={{
                    position: 'absolute',
                    top: screen.width < 480 ? '-125px' : 'unset',
                    left: screen.width < 480 ? '185px' : 'unset',
                  }}
                />
              </div>
            </div>

            <Button.Primary type='submit' sx={{ margin: '0 auto' }}>
              Add Entry
            </Button.Primary>
          </div>
        </Form>
      </Modal.FullPage>
    </LocalizationProvider>
  )
}
