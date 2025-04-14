import styles from './WeightChartMobile.module.css'
import { WeightChartDesktopProps } from '@/types'
import { ChartHeader } from './ChartHeader/ChartHeader'
import { Chart, DateRangePicker } from '@/components/reusable'
import { Button } from '@gymapp/gymui/Button'
import AddIcon from '@mui/icons-material/Add'
import { useToggle } from '@/hooks'
import { AnimatePresence } from 'motion/react'
import { AddWeightModal } from '../../AddWeightModal'

export const WeightChartMobile = ({
  filter,
  weightData,
  labels,
  isLoading,
  data,
}: WeightChartDesktopProps) => {
  const [isAWMOpen, , openAWM, closeAWM] = useToggle()

  return (
    <div className={styles.container}>
      <ChartHeader
        startingWeight={weightData[0]}
        endingWeight={weightData[weightData.length - 1]}
        isEmpty={data?.length == 0}
      />

      <div className={styles.button_container}>
        <DateRangePicker filter={filter} data={data} />
        <Button.Primary onClick={openAWM} sx={{ width: '50%' }}>
          Add <AddIcon />
        </Button.Primary>
      </div>
      <Chart labels={labels} data={weightData} isLoading={isLoading} height='200px' />

      <AnimatePresence>
        {isAWMOpen && <AddWeightModal closeModal={closeAWM} />}
      </AnimatePresence>
    </div>
  )
}
