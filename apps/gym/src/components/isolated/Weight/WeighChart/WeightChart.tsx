import styles from './WeightChart.module.css'
import { DateRangePicker } from '@/components/reusable/DateRangePicker'
import { Chart } from '@/components/reusable'
import { useWeight } from '@/hooks'
import { getChartData } from '@/utils/utils'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

export const WeightChart = () => {
  const { data, isLoading } = useWeight()
  const [l, d] = getChartData(data)
  console.log(l)
  const [labels, setLabels] = useState(l)
  console.log(d)
  const [weightData, setWeightData] = useState(d)

  const filterByRange = (startDate?: Dayjs, endDate?: Dayjs) => {
    console.log('inside filter')
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
    <div className={styles.container}>
      <DateRangePicker click={filterByRange} />
      <div className={styles.chart_container}>
        <Chart labels={labels} data={weightData} isLoading={isLoading} />
      </div>
    </div>
  )
}
