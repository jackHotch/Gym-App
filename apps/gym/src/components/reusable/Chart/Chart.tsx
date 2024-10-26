'use client'

import styles from './TestChart.module.css'
import { ChartProps, IWeightData } from '@/app/globals'
import { Line } from 'react-chartjs-2'
import { DateRangePicker } from '../DateRangePicker'
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
import { useState } from 'react'
import { useWeight } from '@/hooks'
import { convertDate } from '@/utils/utils'

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

export const Chart = () => {
  const { data: d, isLoading } = useWeight()
  const weight = convertDate(d)
  let labels: string[] = []
  let data: number[] = []

  weight?.map((value, id) => {
    if (id > 200) {
      labels.push(value.date)
      data.push(value.weight)
    }
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
      </div>
    </div>
  )
}
