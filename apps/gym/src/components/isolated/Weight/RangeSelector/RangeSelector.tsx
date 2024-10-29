'use client'

import { Dropdown } from '@/components/reusable'
import { useToggle } from '@/hooks'
import { useRef, useState } from 'react'
import { useOutsideClick } from '@/hooks'

export const RangeSelector = () => {
  const [selectedValue, setSelectedValue] = useState('initial value')
  const [open, toggle, , close] = useToggle()
  const contentRef = useRef()
  useOutsideClick(contentRef, close)

  const handleClick = (value: string) => {
    setSelectedValue(value)
    close()
  }
  return (
    <Dropdown>
      <Dropdown.Button onClick={toggle}>{selectedValue}</Dropdown.Button>
      {open && (
        <Dropdown.Content ref={contentRef}>
          <Dropdown.Item handleClick={handleClick}>Item 1</Dropdown.Item>
          <Dropdown.Item handleClick={handleClick}>Item 2</Dropdown.Item>
          <Dropdown.Item handleClick={handleClick}>Item 3</Dropdown.Item>
          <Dropdown.Item handleClick={handleClick}>Item 4</Dropdown.Item>
        </Dropdown.Content>
      )}
    </Dropdown>
  )
}
