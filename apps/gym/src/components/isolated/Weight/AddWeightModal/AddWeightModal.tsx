'use client'

import { useRef, useState } from 'react'
import styles from './AddWeightModal.module.css'
import { AddWeightModalProps } from '@/app/weight/Weight'
import { FormEvent, TextInputChangeEvent } from '@/app/globals'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CloseIcon from '@mui/icons-material/Close'
import dayjs, { Dayjs } from 'dayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useAddWeight } from '@/hooks'

export const AddWeightModal = ({ closeModal }: AddWeightModalProps) => {
  const [calendar, setCalendar] = useState(false)
  const calendarRef = useRef<any>()
  const [weight, setWeight] = useState('')
  const d = convertDate(new Date())
  const [date, setDate] = useState<any>(dayjs(d))
  const { mutate: addWeight, isPending } = useAddWeight()

  function convertDate(date: Date | Dayjs) {
    const newDate = date.toISOString().substring(0, 10)
    const formattedDate =
      newDate.substring(5, 7) +
      '/' +
      newDate.substring(8, 10) +
      '/' +
      newDate.substring(0, 4)
    return formattedDate
  }

  const updateWeight = (e: TextInputChangeEvent) => {
    setWeight(e.target.value)
  }

  const toggleCalendar = () => {
    setCalendar(!calendar)
  }

  // useEffect(() => {
  //   let handler = (e: any) => {
  //     if (!calendarRef.current.contains(e.target)) {
  //       if (e.target.className !== 'date_input') {
  //         setCalendar(false)
  //       }
  //     }
  //   }
  //   document.addEventListener('mousedown', handler)

  //   return () => {
  //     document.removeEventListener('mousedown', handler)
  //   }
  // })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const d = convertDate(date)
    const data = { weight: weight, date: d }
    addWeight(data)
    closeModal()
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.modal_background} onClick={closeModal}>
        <form onSubmit={handleSubmit}>
          <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <div className={styles.close_btn}>
                <CloseIcon onClick={closeModal} />
              </div>
              <h4>New Entry</h4>
            </div>

            <div className={styles.entry}>
              <div className={styles.weight}>
                <label>Weight: </label>
                <div className={styles.weight_input}>
                  <input
                    type='text'
                    placeholder='lbs'
                    value={weight}
                    onChange={updateWeight}
                  />
                </div>
              </div>

              <div className={styles.date}>
                <label>Date: </label>
                <div className={styles.date_input} onClick={toggleCalendar}>
                  <input type='text' value={convertDate(date)} readOnly={true} />
                  <CalendarMonthIcon id={styles.calendar_icon} />
                </div>
              </div>

              <div ref={calendarRef}>
                {calendar && (
                  <div
                    className={styles.calendar_background}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DateCalendar
                      value={date}
                      onChange={(newDate: Dayjs) => setDate(newDate)}
                    />
                  </div>
                )}
              </div>
            </div>

            <button type='submit' className={styles.add_btn}>
              Add
            </button>
          </div>
        </form>
      </div>
    </LocalizationProvider>
  )
}
