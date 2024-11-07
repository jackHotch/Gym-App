'use client'

import styles from './Chart.module.css'
import { ChartProps } from '@/app/globals'
import { Line } from 'react-chartjs-2'
import { Loading } from '@gymapp/gymui/Loading'
import { cssvar } from '@/utils/utils'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  scales,
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  scales
)

ChartJS.defaults.maintainAspectRatio = false

export const Chart = ({ labels, data, isLoading }: ChartProps) => {
  const [blue, setBlue] = useState('')
  const [transparentBlue, setTransparentBlue] = useState('')

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        bodyColor: 'black',
        titleColor: 'black',
        bodyAlign: 'center',
        titleFont: {
          size: 14,
          family: 'Inter',
        },
        bodyFont: {
          size: 15,
          family: 'Inter',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (_, i) => {
            return labels.length > 30 ? (i % 2 === 0 ? labels[i] : undefined) : labels[i]
          },
        },
      },
    },
  }

  useEffect(() => {
    setBlue(cssvar('--blue'))
    setTransparentBlue(cssvar('--transparent-blue'))
  })

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'lbs',
        data: data,
        backgroundColor: transparentBlue,
        borderColor: blue,
        fill: 'start',
      },
    ],
  }

  if (isLoading) {
    return (
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
    )
  }

  return <Line options={options} data={chartData} />
}
