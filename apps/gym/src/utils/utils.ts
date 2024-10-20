import { Dayjs } from 'dayjs'

export const convertDate = (date: Date | Dayjs) => {
  const newDate = date.toISOString().substring(0, 10)
  const formattedDate =
    newDate.substring(5, 7) +
    '/' +
    newDate.substring(8, 10) +
    '/' +
    newDate.substring(0, 4)
  return formattedDate
}
