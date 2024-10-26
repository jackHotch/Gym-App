'use client'

import styles from './Dropdown.module.css'
import { Button } from './Button/Button'
import { Content } from './Content/Content'
import { Item } from './Item/Item'
import { CSSProperties, HTMLAttributes, ReactNode, useState } from 'react'
import { useToggle } from '@/hooks'

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  sx?: CSSProperties
  children: ReactNode | ReactNode[]
}

export const Dropdown = ({ sx, children }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState('inital')
  const [open, toggle] = useToggle()

  return (
    <div className={styles.container} style={sx}>
      <Button onClick={toggle}>{selectedItem}</Button>
      {open && <Content>{children}</Content>}
    </div>
  )
}

Dropdown.Button = Button
Dropdown.Content = Content
Dropdown.Item = Item
