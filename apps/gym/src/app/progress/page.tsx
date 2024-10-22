'use client'

import { DatePicker } from '@/components/reusable'
import { convertDate } from '@/utils/utils'
import dayjs from 'dayjs'
import { useState } from 'react'

const Progress = () => {
  const [date, setDate] = useState(dayjs())

  return (
    <div style={{ margin: '200px', width: 'max-content' }}>
      <DatePicker value={date} setDate={setDate} />
    </div>
  )
}

export default Progress
