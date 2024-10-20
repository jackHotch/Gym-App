import { render } from '@testing-library/react'
import { Calendar } from './Calendar'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

describe('Calendar', () => {
  it('Calendar should render successfully', () => {
    const { baseElement } = render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Calendar />
      </LocalizationProvider>
    )

    expect(baseElement).toBeTruthy()
  })
})
