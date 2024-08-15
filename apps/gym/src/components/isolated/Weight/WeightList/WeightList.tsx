'use client'

import styles from './WeightList.module.css'
import { WeightListProps } from '@/app/weight/Weight'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { AddWeightModal } from '../AddWeightModal'
import { EntryModal } from '../EntryModal'
import { useToggle, useArrayToggle } from '@/hooks'

export const WeightList = ({ weight }: WeightListProps) => {
  const [isAWMVisible, _, openAWM, closeAWM] = useToggle()
  const arr: boolean[] = new Array(weight?.length).fill(false)
  const [isEntryVisible, toggleEntry, __, closeEntry] = useArrayToggle(arr)
  let reversedArray: number[] = []
  weight?.map((_, index) => {
    return reversedArray.push(index)
  })
  reversedArray.reverse()
  const reversedWeight = weight?.toReversed()

  return (
    <div className={styles.container}>
      <h2>Weight</h2>
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
            return (
              <div key={key} className={styles.entry}>
                <span className={styles.number}>#{reversedArray[key] + 1}</span>
                <span className={styles.weight}>{value.weight} lbs</span>
                <span className={styles.date}>{value.date}</span>
                <span>
                  <MoreVertIcon id={styles.three_dots} onClick={() => toggleEntry(key)} />
                </span>
                <div className={styles.entry_modal}>
                  {isEntryVisible[key] && (
                    <EntryModal id={value.id} closeModal={closeEntry} />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {isAWMVisible && <AddWeightModal closeModal={closeAWM} />}
    </div>
  )
}
