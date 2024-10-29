'use client'

import styles from './Dropdown.module.css'
import { Button } from './Button/Button'
import { Content } from './Content/Content'
import { Item } from './Item/Item'
import { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  sx?: CSSProperties
  children: ReactNode | ReactNode[]
}

export const Dropdown = ({ sx, children }: DropdownProps) => {
  return (
    <div className={styles.container} style={sx}>
      {children}
    </div>
  )
}

Dropdown.Button = Button
Dropdown.Content = Content
Dropdown.Item = Item
