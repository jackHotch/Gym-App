'use client'

import styles from './WeightList.module.css'
import { AddWeightModal } from '../AddWeightModal'
import { WeightListEntry } from './WeightListEntry/WeightListEntry'
import { useToggle, useWeight } from '@/hooks'
import { AnimatePresence } from 'framer-motion'
import { Loading } from '@gymapp/gymui/Loading'
import { convertDate } from '@/utils/utils'

export const WeightList = () => {
  const { data, isLoading } = useWeight()
  const weight = convertDate(data)
  const [isAWMVisible, _, openAWM, closeAWM] = useToggle()
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
          {isLoading ? (
            <Loading.Text
              fontSize='26px'
              pulseSize={10}
              sx={{
                justifyContent: 'center',
                fontWeight: '500',
                position: 'absolute',
                inset: '0',
              }}
            >
              Gathering Data
            </Loading.Text>
          ) : (
            reversedWeight?.map((value, key) => {
              return (
                <WeightListEntry key={key} value={value} id={reversedArray[key] + 1} />
              )
            })
          )}
        </div>
      </div>

      <AnimatePresence>
        {isAWMVisible && <AddWeightModal closeModal={closeAWM} />}
      </AnimatePresence>
    </div>
  )
}
