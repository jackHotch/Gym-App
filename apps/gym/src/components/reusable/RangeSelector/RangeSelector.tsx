'use client'

import { RangeSelectorProps } from '@/types'
import { Dropdown } from '@/components/reusable'
import { useToggle } from '@/hooks'
import { useEffect, useRef, useState } from 'react'
import { useOutsideClick } from '@/hooks'
import { AnimatePresence, useAnimate } from 'motion/react'
import { RangeSelectorOptions } from '@/constants'

export const RangeSelector = ({
  filter,
  openDatePickers,
  closeDatePickers,
  data,
  maxWidth = '',
  width = '213px',
}: RangeSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState('Since Starting Date')
  const [open, toggle, , close] = useToggle()
  const contentRef = useRef()
  const [scope, animate] = useAnimate()
  useOutsideClick(contentRef, outsideClick)

  useEffect(() => {
    setSelectedValue('Since Starting Date')
  }, [data])

  function outsideClick() {
    animate(scope.current, { rotate: 0 })
    close()
  }

  const handleClick = (id: number) => {
    setSelectedValue(RangeSelectorOptions[id].name)
    animate(scope.current, { rotate: 0 })
    closeDatePickers()

    if (RangeSelectorOptions[id].name === 'Custom') {
      handleCustomClick()
    } else if (RangeSelectorOptions[id].name === 'Since Starting Date') {
      handleStartingClick()
    } else {
      filter(RangeSelectorOptions[id].startDate, RangeSelectorOptions[id].endDate)
      close()
    }
  }

  const handleCustomClick = () => {
    openDatePickers()
    close()
  }

  const handleStartingClick = () => {
    filter()
    closeDatePickers()
    close()
  }

  const handleButtonClick = () => {
    toggle()
    animate(scope.current, { rotate: open ? 0 : 180 })
  }

  return (
    <Dropdown maxWidth={maxWidth} width={width}>
      <Dropdown.Button ref={scope} onClick={handleButtonClick}>
        {selectedValue}
      </Dropdown.Button>
      <AnimatePresence>
        {open && (
          <Dropdown.Content ref={contentRef}>
            {RangeSelectorOptions.map((option, key) => {
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
