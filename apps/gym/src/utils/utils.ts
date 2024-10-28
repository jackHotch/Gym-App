import { IWeightData } from '@/app/globals'
import dayjs from 'dayjs'

export const convertDate = (data: IWeightData[]) => {
  const formatedDate = data
  for (let i = 0; i < data?.length; i++) {
    formatedDate[i].date = dayjs(data[i].date).format('MM/DD/YYYY')
  }
  return formatedDate
}

export const getChartData = (list: IWeightData[]) => {
  console.log(list)
  console.log('inside chart')
  let l = []
  let d = []
  const data = convertDate(list)
  data?.map((value) => {
    l.push(value.date)
    d.push(value.weight)
  })
  return [l, d]
}
