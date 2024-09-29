'use client'

import styles from './WeightList.module.css'
import { WeightListProps } from '@/app/weight/Weight'
import { AddWeightModal } from '../AddWeightModal'
import { WeightListEntry } from './WeightListEntry/WeightListEntry'
import { useToggle } from '@/hooks'
import { AnimatePresence } from 'framer-motion'

export const WeightList = ({ weight }: WeightListProps) => {
  const [isAWMVisible, _, openAWM, closeAWM] = useToggle()
  const arr: boolean[] = new Array(weight?.length).fill(false)
  let reversedArray: number[] = []
  weight?.map((_, index) => {
    return reversedArray.push(index)
  })
  reversedArray.reverse()
  const reversedWeight = weight?.toReversed()

  return (
    <div className={styles.container}>
      <div className={styles.add_btn_div}>
        <span className={styles.add_btn} onClick={openAWM}>
          +
        </span>
      </div>

      <div className={styles.list}>
        <div className={styles.list_sub_headings}>
          <span id={styles.number_head}>#</span>
          <span id={styles.weight_head}>lbs</span>
          <span id={styles.date_head}>Date</span>
        </div>
        <div className={styles.list_entries}>
          {reversedWeight?.map((value, key) => {
            return <WeightListEntry key={key} value={value} id={reversedArray[key] + 1} />
          })}
        </div>
      </div>

      <AnimatePresence>
        {isAWMVisible && <AddWeightModal closeModal={closeAWM} />}
      </AnimatePresence>
    </div>
  )
}
