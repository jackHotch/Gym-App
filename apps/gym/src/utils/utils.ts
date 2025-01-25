import { IWeightData } from '@/types'
import dayjs from 'dayjs'

export const convertDate = (data: IWeightData[]) => {
  const formattedDate = data ? Array.from(data) : []
  // console.log(formattedDate === data)
  for (let i = 0; i < data?.length; i++) {
    console.log(data[i].date)
    formattedDate[i].date = dayjs(data[i].date).format('MM/DD')
  }
  return formattedDate
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
