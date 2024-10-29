import styles from './WeightChart.module.css'
import { DateRangePicker } from '@/components/reusable/DateRangePicker'
import { Chart } from '@/components/reusable'
import { useWeight } from '@/hooks'
import { convertDate, getChartData } from '@/utils/utils'
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { IWeightData } from '@/app/globals'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const WeightChart = () => {
  const { data, isLoading } = useWeight()
  const [labels, setLabels] = useState([])
  const [weightData, setWeightData] = useState([])

  useEffect(() => {
    const [l, d] = getChartData(data)
    setLabels(l)
    setWeightData(d)
  }, [data])

  const filterByRange = (startDate?: Dayjs, endDate?: Dayjs) => {
    startDate = startDate ? startDate : dayjs().subtract(3, 'M')
    endDate = endDate ? endDate : dayjs()
    const filteredData = data?.filter((value) => {
      const d = dayjs(value.date)
      return d.isAfter(startDate) && d.isBefore(endDate)
    })
    const [l, d] = getChartData(filteredData)
    setLabels(l)
    setWeightData(d)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <DateRangePicker />
        <div className={styles.chart_container}>
          <Chart labels={labels} data={weightData} isLoading={isLoading} />
        </div>
      </div>
    </LocalizationProvider>
  )
}
