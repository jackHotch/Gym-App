'use client'

import styles from './WeightList.module.css'
import { WeightListEntry } from './WeightListEntry/WeightListEntry'
import { useWeight } from '@/hooks/api/useWeight'
import { Loading } from '@gymapp/gymui/Loading'
import { convertDate } from '@/utils/utils'
import { Card } from '@gymapp/gymui/Card'

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
    <Card sx={{ height: 'calc(100% - 32px)', overflow: 'scroll' }}>
      <Card.Content>
        <span className={styles.heading}>Entries</span>
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
          ) : data.length == 0 ? (
            <span className={styles.no_data}>No Data</span>
          ) : (
            reversedWeight?.map((value, key) => {
              const difference =
                key == reversedArray[0]
                  ? ''
                  : (
                      data[reversedArray[key]]?.weight -
                      data[reversedArray[key + 1]]?.weight
                    ).toFixed(1)
              return (
                <WeightListEntry
                  key={key}
                  value={value}
                  id={reversedArray[key] + 1}
                  difference={Number(difference)}
                />
              )
            })
          )}
        </div>
      </Card.Content>
    </Card>
  )
}
