import styles from './WeightChart.module.css'
import { WeightChartDesktop } from './WeightChartDesktop/WeightChartDesktop'
import { WeightChartMobile } from './WeightChartMobile/WeightChartMobile'

export const WeightChart = () => {
  return (
    <>
      <WeightChartDesktop />
      <WeightChartMobile />
    </>
  )
}
