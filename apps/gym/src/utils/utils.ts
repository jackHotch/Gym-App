import { IWeightData } from '@/types'
import dayjs from 'dayjs'

export const convertDate = (data: IWeightData[]) => {
  const formattedDate = data?.map((entry) => ({ ...entry }))
  for (let i = 0; i < data?.length; i++) {
    formattedDate[i].date = dayjs(data[i].date).format('MM/DD/YYYY')
  }
  return formattedDate
}

export const getChartData = (list: IWeightData[]) => {
  let l = []
  let d = []
  const data = convertDate(list)
  data?.map((value) => {
    l.push(value.date.substring(0, 5))
    d.push(value.weight)
  })
  return [l, d]
}

export const cssvar = (name: string) => {
  return window.getComputedStyle(document.documentElement).getPropertyValue(name)
}
