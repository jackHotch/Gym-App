import styles from './TestChart.module.css'
import { ChartProps } from '@/app/globals'
import { Line } from 'react-chartjs-2'
import { DateRangePicker } from '../DateRangePicker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { lineChartData } from './FAKEDATA'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

ChartJS.defaults.maintainAspectRatio = false

export const Chart = ({ weight }: ChartProps) => {
  let labels: string[] = []
  let data: number[] = []

  weight?.map((value) => {
    labels.push(value.date)
    data.push(value.weight)
  })

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'lbs',
        data: data,
        borderColor: 'rgb(58, 143, 234)',
      },
    ],
  }

  return (
    <div className={styles.container}>
      <DateRangePicker />
      <div className={styles.chart_container}>
        <Line options={options} data={lineChartData} />
      </div>
    </div>
  )
}
