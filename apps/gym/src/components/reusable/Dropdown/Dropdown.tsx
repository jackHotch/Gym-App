'use client'

import styles from './Dropdown.module.css'
import { DropdownProps } from '@/types'
import { Button } from './Button/Button'
import { Content } from './Content/Content'
import { Item } from './Item/Item'

export const Dropdown = ({
  sx,
  width = '213px',
  maxWidth = '',
  children,
}: DropdownProps) => {
  return (
    <div className={styles.container} style={{ ...sx, maxWidth: maxWidth, width: width }}>
      {children}
    </div>
  )
}

Dropdown.Button = Button
Dropdown.Content = Content
Dropdown.Item = Item
