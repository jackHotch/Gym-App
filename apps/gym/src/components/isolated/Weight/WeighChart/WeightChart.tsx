import styles from './WeightChart.module.css'
import { DateRangePicker } from '@/components/reusable/DateRangePicker'
import { Chart } from '@/components/reusable'
import { useWeight } from '@/hooks/api/useWeight'
import { getChartData } from '@/utils/utils'
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { ChartHeader } from '../ChartHeader'
dayjs.extend(isBetween)

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
    startDate = startDate ? startDate : dayjs(data[0].date)
    endDate = endDate ? endDate : dayjs(data[data.length - 1].date)
    const filteredData = data?.filter((value) => {
      return dayjs(value.date).isBetween(startDate, endDate, 'day', '[]')
    })
    const [l, d] = getChartData(filteredData)
    setLabels(l)
    setWeightData(d)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <ChartHeader
          startingWeight={weightData[0]}
          endingWeight={weightData[weightData.length - 1]}
        />
        <DateRangePicker filter={filterByRange} data={data} />
        <div className={styles.chart_container}>
          <Chart labels={labels} data={weightData} isLoading={isLoading} />
        </div>
      </div>
    </LocalizationProvider>
  )
}
