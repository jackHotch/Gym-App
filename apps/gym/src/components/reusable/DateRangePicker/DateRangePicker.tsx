import styles from './DateRangePicker.module.css'
import { DateRangePickerProps } from '@/types'
import { DateRangePickerDesktop } from './DateRangePickerDesktop/DateRangePickerDesktop'
import { DateRangePickerMobile } from './DateRangePickerMobile/DateRangePickerMobile'

export const DateRangePicker = ({ filter, data }: DateRangePickerProps) => {
  return (
    <>
      <DateRangePickerDesktop filter={filter} data={data} />
      <DateRangePickerMobile filter={filter} data={data} />
    </>
  )
}
