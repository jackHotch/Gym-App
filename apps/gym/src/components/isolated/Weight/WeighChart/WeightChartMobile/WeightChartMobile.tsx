import styles from './WeightChartMobile.module.css'
import { WeightChartDesktopProps } from '@/types'
import { ChartHeader } from './ChartHeader/ChartHeader'
import { Chart, DateRangePicker } from '@/components/reusable'

export const WeightChartMobile = ({
  filter,
  weightData,
  labels,
  isLoading,
  data,
}: WeightChartDesktopProps) => {
  return (
    <div className={styles.container}>
      <ChartHeader
        startingWeight={weightData[0]}
        endingWeight={weightData[weightData.length - 1]}
      />
      <DateRangePicker filter={filter} data={data} />
      <Chart labels={labels} data={weightData} isLoading={isLoading} height='250px' />
    </div>
  )
}
