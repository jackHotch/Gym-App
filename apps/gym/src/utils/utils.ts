import { IWeightData } from '@/app/globals'
import dayjs from 'dayjs'

export const convertDate = (data: IWeightData[]) => {
  const formatedDate = data
  for (let i = 0; i < data?.length; i++) {
    formatedDate[i].date = dayjs(data[i].date).format('MM/DD/YYYY')
  }
  return formatedDate
}
