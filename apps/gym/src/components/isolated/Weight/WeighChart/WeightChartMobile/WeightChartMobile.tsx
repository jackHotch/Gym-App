import styles from './WeightChartMobile.module.css'
import { WeightChartDesktopProps } from '@/types'
import { ChartHeader } from './ChartHeader/ChartHeader'
import { Chart, DateRangePicker } from '@/components/reusable'
import { Button } from '@gymapp/gymui/Button'

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

      <div className={styles.button_container}>
        <DateRangePicker filter={filter} data={data} />
        <Button.Primary>Add +</Button.Primary>
      </div>
      <Chart labels={labels} data={weightData} isLoading={isLoading} height='200px' />
    </div>
  )
}
