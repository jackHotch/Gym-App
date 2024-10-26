'use client'

import { Dropdown } from '@/components/reusable'

const Progress = () => {
  return (
    <div style={{ margin: '100px' }}>
      <Dropdown>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default Progress
