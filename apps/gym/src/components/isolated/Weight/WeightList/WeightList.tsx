'use client'

import styles from './WeightList.module.css'
import { WeightListEntry } from './WeightListEntry/WeightListEntry'
import { useWeight } from '@/hooks'
import { Loading } from '@gymapp/gymui/Loading'
import { convertDate } from '@/utils/utils'

export const WeightList = () => {
  const { data, isLoading } = useWeight()
  const weight = convertDate(data)

  let reversedArray: number[] = []
  weight?.map((_, index) => {
    return reversedArray.push(index)
  })
  reversedArray.reverse()
  const reversedWeight = weight?.toReversed()

  return (
    <div className={styles.container}>
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
    </div>
  )
}
