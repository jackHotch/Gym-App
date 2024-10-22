import { render } from '@testing-library/react'
import { DatePicker } from './DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { convertDate } from '@/utils/utils'
import { useState } from 'react'
import dayjs from 'dayjs'

describe('DatePicker', () => {
  it('DatePicker should render successfully', () => {
    let date = dayjs()
    const setDate = (n: any) => (date = n)
    const { baseElement } = render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={date} setDate={setDate} />
      </LocalizationProvider>
    )

    expect(baseElement).toBeTruthy()
  })
})
