'use client'

import { useCurrentWeight } from '@/hooks/api/useCurrentWeight'
import styles from './HeaderDesktop.module.css'
import { HeaderDesktopProps } from '@/types'

export const HeaderDesktop = ({}: HeaderDesktopProps) => {
  const { data } = useCurrentWeight()

  return (
    <div className={styles.container}>
      <span>Current Weight {data}</span>
    </div>
  )
}
