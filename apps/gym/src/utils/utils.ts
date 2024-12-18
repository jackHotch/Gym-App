import { IWeightData } from '@/types'
import dayjs from 'dayjs'

export const convertDate = (data: IWeightData[]) => {
  const formatedDate = data
  for (let i = 0; i < data?.length; i++) {
    formatedDate[i].date = dayjs(data[i].date).format('MM/DD/YYYY')
  }
  return formatedDate
}

export const getChartData = (list: IWeightData[]) => {
  let l = []
  let d = []
  const data = convertDate(list)
  data?.map((value) => {
    l.push(value.date)
    d.push(value.weight)
  })
  return [l, d]
}

export const cssvar = (name: string) => {
  return window.getComputedStyle(document.documentElement).getPropertyValue(name)
}
