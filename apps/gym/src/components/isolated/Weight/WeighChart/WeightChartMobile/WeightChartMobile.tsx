import styles from './WeightChartMobile.module.css'
import { WeightChartDesktopProps } from '@/types'
import { ChartHeader } from './ChartHeader/ChartHeader'
import { Chart, DateRangePicker } from '@/components/reusable'
import { AddWeightModal } from '../../AddWeightModal'
import { useState } from 'react'

export const WeightChartMobile = ({
  filter,
  weightData,
  labels,
  isLoading,
  data,
}: WeightChartDesktopProps) => {
  const [showAddWeightModal, setShowAddWeightModal] = useState(false)

  return (
    <div className={styles.container}>
      <ChartHeader
        startingWeight={weightData[0]}
        endingWeight={weightData[weightData.length - 1]}
        isEmpty={data?.length == 0}
      />

      <div className={styles.button_container}>
        <AddWeightModal open={showAddWeightModal} setOpen={setShowAddWeightModal} />
        <DateRangePicker filter={filter} data={data} />
      </div>
      <Chart labels={labels} data={weightData} isLoading={isLoading} height='200px' />
    </div>
  )
}
