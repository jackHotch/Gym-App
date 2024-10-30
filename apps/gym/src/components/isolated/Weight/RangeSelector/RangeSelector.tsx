'use client'

import { Dropdown } from '@/components/reusable'
import { useToggle } from '@/hooks'
import { useRef, useState } from 'react'
import { useOutsideClick } from '@/hooks'
import dayjs, { Dayjs } from 'dayjs'
import { AnimatePresence, useAnimate } from 'framer-motion'

interface RangeSelectorProps {
  updateChart: (startDate?: Dayjs, endDate?: Dayjs) => void
  openDatePickers: () => void
  closeDatePickers: () => void
}

export const RangeSelector = ({
  updateChart,
  openDatePickers,
  closeDatePickers,
}: RangeSelectorProps) => {
  const options = [
    { name: '1 Week', startDate: dayjs().subtract(1, 'w'), endDate: dayjs() },
    { name: '1 Month', startDate: dayjs().subtract(1, 'M'), endDate: dayjs() },
    { name: '2 Months', startDate: dayjs().subtract(2, 'M'), endDate: dayjs() },
    { name: '3 Months', startDate: dayjs().subtract(3, 'M'), endDate: dayjs() },
    { name: '6 Months', startDate: dayjs().subtract(6, 'M'), endDate: dayjs() },
    { name: '1 Year', startDate: dayjs().subtract(1, 'y'), endDate: dayjs() },
    { name: 'Since Starting Date' },
    { name: 'Custom' },
  ]

  const [selectedValue, setSelectedValue] = useState('Since Starting Date')
  const [open, toggle, , close] = useToggle()
  const contentRef = useRef()
  const [scope, animate] = useAnimate()
  useOutsideClick(contentRef, close)

  const handleClick = (id: number) => {
    setSelectedValue(options[id].name)
    animate(scope.current, { rotate: 0 })
    closeDatePickers()

    if (options[id].name === 'Custom') {
      handleCustomClick()
      return
    } else if (options[id].name === 'Since Starting Date') {
      handleStartingClick()
      return
    }

    updateChart(options[id].startDate, options[id].endDate)
    close()
  }

  const handleCustomClick = () => {
    openDatePickers()
    close()
  }

  const handleStartingClick = () => {
    updateChart()
    closeDatePickers()
    close()
  }

  const handleButtonClick = () => {
    toggle()
    animate(scope.current, { rotate: open ? 0 : 180 })
  }

  return (
    <Dropdown>
      <Dropdown.Button ref={scope} onClick={handleButtonClick}>
        {selectedValue}
      </Dropdown.Button>
      <AnimatePresence>
        {open && (
          <Dropdown.Content ref={contentRef}>
            {options.map((option, key) => {
              return (
                <Dropdown.Item key={key} id={key} handleClick={handleClick}>
                  {option.name}
                </Dropdown.Item>
              )
            })}
          </Dropdown.Content>
        )}
      </AnimatePresence>
    </Dropdown>
  )
}