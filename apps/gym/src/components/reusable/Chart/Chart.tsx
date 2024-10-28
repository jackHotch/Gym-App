'use client'

import styles from './TestChart.module.css'
import { ChartProps } from '@/app/globals'
import { Line } from 'react-chartjs-2'
import { Loading } from '@gymapp/gymui/Loading'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
)

ChartJS.defaults.maintainAspectRatio = false

export const Chart = ({ labels, data, isLoading }: ChartProps) => {
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
    <>
      {isLoading ? (
        <Loading.Text
          fontSize='26px'
          pulseSize={10}
          sx={{
            justifyContent: 'center',
            fontWeight: '500',
            position: 'absolute',
            inset: '0',
          }}
        >
          Creating Graph
        </Loading.Text>
      ) : (
        <Line options={options} data={chartData} />
      )}
    </>
  )
}
