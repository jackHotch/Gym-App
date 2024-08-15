import React from 'react'
import styles from './Divider.module.css'

interface DivProps {
  variant: string
  children: string
  onClick?: () => void
}

export const Divider = ({ variant, children, onClick }: DivProps) => {
  return (
    <div className={styles[variant]} onClick={onClick}>
      {children}
    </div>
  )
}
